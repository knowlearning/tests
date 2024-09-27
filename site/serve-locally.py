from http.server import HTTPServer, SimpleHTTPRequestHandler
import ssl
import os

PORT = 4443

os.chdir('./dist')

class MyHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            # Serve index.html for the root path
            self.path = '/index.html'
        elif os.path.exists('.' + self.path):
            # Serve the requested file if it exists
            pass  # Default behavior
        else:
            # Fallback to index.html for non-existent paths
            self.path = '/index.html'
        return SimpleHTTPRequestHandler.do_GET(self)

httpd = HTTPServer(('localhost', PORT), MyHandler)

# Create an SSL context
context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
context.load_cert_chain(certfile='cert.pem', keyfile='key.pem')

# Wrap the server's socket with the SSL context
httpd.socket = context.wrap_socket(httpd.socket, server_side=True)

print('Serving site from port ' + str(PORT))

httpd.serve_forever()