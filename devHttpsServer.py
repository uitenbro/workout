import http.server
import ssl
from http.server import CGIHTTPRequestHandler

httpd = http.server.HTTPServer(('127.0.0.1', 8000), CGIHTTPRequestHandler)

context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
context.load_cert_chain(certfile='./localhost.pem', keyfile='./localhost-key.pem')

httpd.socket = context.wrap_socket(httpd.socket, server_side=True)

print("Serving on https://localhost:8000/")
httpd.serve_forever()