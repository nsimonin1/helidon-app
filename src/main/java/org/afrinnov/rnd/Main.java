package org.afrinnov.rnd;

import io.helidon.common.http.Http;
import io.helidon.media.jsonp.JsonpSupport;
import io.helidon.webserver.Routing;
import io.helidon.webserver.WebServer;
import io.helidon.webserver.staticcontent.StaticContentSupport;

public class Main {

    public static void main(String[] args) {
        WebServer server= WebServer.builder(createRouting())
                .port(8080)
                .addMediaSupport(JsonpSupport.create())
                .build();

        server.start().thenAccept(ws->System.out.println("WEB server is up! http://localhost:" + ws.port()));

        server.whenShutdown()
                .thenRun(() -> System.out.println("WEB server is DOWN. Good bye!"));
    }

    private static Routing createRouting() {
        return Routing.builder()
                .any("/", (req, res) -> {
                    // showing the capability to run on any path, and redirecting from root
                    res.status(Http.Status.MOVED_PERMANENTLY_301);
                    res.headers().put(Http.Header.LOCATION, "/ui");
                    res.send();
                })
                .register("/ui", new CounterService())
                .register("/ui", StaticContentSupport.builder("WEB")
                        .welcomeFileName("index.html")
                        .build())
                .build();
    }
}
