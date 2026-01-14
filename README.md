## Development

### Client

To start the development server for the client, navigate to the `client` directory and run the following commands:

```bash
npm install
npm run dev
```

### Server

To start the development server for the server, navigate to the `server` directory and run the following commands:

```bash
python3 -m venv venv && ./venv/bin/pip install -r requirements.txt
./venv/bin/python manage.py migrate
./venv/bin/python manage.py runserver
```
