import socket

header = 64
PORT = 8000
Format = "utf-8"
Disconnect_msg = "you are disconnected"
Server = "192.168.56.1"
addr = (Server, PORT)

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect(addr)

def send(msg):
    message = msg.encode(Format)
    msg_length = len(message)
    send_length = str(msg_length).encode(Format)
    send_length += b' ' * (header - len(send_length))
    client.send(send_length)
    client.send(message)
    print(client.recv(68).decode(Format))

send("hello world")
input()
send(Disconnect_msg)
client.close()