import socket
import threading

stop_scanning = False  # Global flag

def get_ip(domain):
    """Get domain ip addresses"""
    try: 
        ip = socket.gethostbyname(domain)
        return ip 
    except socket.gaierror as e:
        print(f"Error resolving domain {domain}: {e}")
        return None
        
def scan_port(ip, port, open_ports):
    """Check if a single port is open"""
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(1)
        
        result = sock.connect_ex((ip, port))
        if result == 0:
            print(f"[OPEN] Port {port}")
            open_ports.append(port)
        sock.close()
    except Exception as e:
        pass

def scan_ports(domain, start_port, end_port):
    """Scan a range of ports"""
    global stop_scanning
    stop_scanning = False
    
    try:
        ip = get_ip(domain)
        if not ip:
            print("Could not resolve domain")
            return
            
        print(f"Scanning {domain} ({ip}) from port {start_port} to {end_port}...")
        print("Press Ctrl+C to stop\n")
        open_ports = []
        threads = []
        
        for port in range(start_port, end_port + 1):
            if stop_scanning:
                break
                
            thread = threading.Thread(target=scan_port, args=(ip, port, open_ports))
            thread.daemon = True
            threads.append(thread)
            thread.start()

        # Wait for all threads to finish
        for thread in threads:
            thread.join()

        print(f"\n[RESULTS] Open ports: {open_ports if open_ports else 'None found'}")
        
    except KeyboardInterrupt:
        # ✅ Clear stopping message
        print("\n" + "="*50)
        print("[STOPPING] Stopping scan...")
        print("="*50)
        stop_scanning = True
        
        # Wait for remaining threads
        print("\n[INFO] Waiting for remaining threads to finish...\n")
        for thread in threads:
            thread.join()
        
        # Show results found so far
        print("\n" + "="*50)
        print("[SCAN STOPPED]")
        print("="*50)
        print(f"Open ports found before stopping: {open_ports if open_ports else 'None'}")
        print("="*50 + "\n")

# Usage
domain = "dev.thetourafrica.com"
start_port = 1
end_port = 65535

scan_ports(domain, start_port, end_port)