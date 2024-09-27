pnpm run build
openssl req -x509 -newkey rsa:2048 -keyout dist/key.pem -out dist/cert.pem -days 365 -nodes -subj "/CN=localhost"
python3 serve-locally.py
