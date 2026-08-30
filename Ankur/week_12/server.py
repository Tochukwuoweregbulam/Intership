import socket
import threading

header = 64
PORT = 8000
Server = socket.gethostbyname(socket.gethostname())
Addr = (Server, PORT)
Format = "utf-8"
Disconnect_msg = "you are disconnected"

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(Addr)

def handle_client(conn, addr):
  print(f"[NEW CONNECTION] {addr} connected.")
  connected = True
  while connected:
     msg_length = conn.recv(header).decode(Format)
     if msg_length:
       msg_length = int(msg_length)
       msg = conn.recv(msg_length).decode(Format)
       
       print (f"[{addr}], {msg} ") 
     conn.send("msg received".encode(Format))

     if msg == Disconnect_msg:
        connected = False
        break
    
  conn.close()

def  start():
    server.listen()
    print(f"[listening] server is listening on {Server}")
    while True:
        conn, addr = server.accept()
        thread  = threading.Thread(target=handle_client, args=(conn, addr))
        thread.start()
        print(f"[ACTIVE CONNECTIONS] {threading.active_count() - 1}")

print("[starting ] the server starting...")
start()