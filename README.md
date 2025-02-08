# Prueba Técnica - Sistema de Alumnos

Este proyecto consiste en un sistema Back-End desarrollado con Django y PostgreSQL, y un Front-End desarrollado con Angular.

---

## Tecnologías Utilizadas
- **Back-End:** Django REST Framework
- **Front-End:** Angular 17 + Bootstrap
- **Base de Datos:** PostgreSQL
- **Seguridad:** Autenticación JWT

---

## Instrucciones de Instalación Backend
1. Clonar el repositorio

   ```bash
    git clone https://github.com/rjdrk/python_angular_test.git
    cd python_angular_test/back-end

2. Crear y activar un entorno virtual

    ```bash
    python3 -m venv venv
    source venv/bin/activate  # Mac/Linux
    .\venv\Scripts\activate  # Windows

3. Instalar dependencias

    ```bash
    pip install -r requirements.txt

4. Configurar variables de entorno
    Crear el archivo .env en el directorio back-end y definir las variables necesarias:

    ```bash
    API_KEY=tu_api_key_secreta
    API_BASE_URL=https://api.example.com
    DB_NAME=school_db
    DB_USER=your_user
    DB_PASSWORD=your_password
    DB_HOST=localhost
    DB_PORT=5432
    DEBUG=True

5. Configurar la base de datos
    Accede a PostgreSQL y crea la base de datos:

    ```bash
    CREATE DATABASE db_colegio;
    CREATE USER your_user WITH PASSWORD 'your_password';
    GRANT ALL PRIVILEGES ON DATABASE school_db TO your_user;

6. Aplicar migraciones

    ```bash
    python manage.py makemigrations
    python manage.py migrate

7. Crear un superusuario (opcional)

    ```bash
    python manage.py createsuperuser

8. Ejecutar el servidor

    ```bash
    python manage.py runserver

## Uso de la API
Endpoints Disponibles

1. Crear AlumnoPOST: /crear-alumno/Cuerpo de la solicitud:

    ```bash
    {
        "nombre_alumno": "Juan Perez",
        "fecha_nacimiento": "2010-05-22",
        "nombre_padre": "Carlos Perez",
        "nombre_madre": "Ana Lopez",
        "grado": "Primero",
        "seccion": "A",
        "fecha_ingreso": "2022-01-10"
    }

2. Consultar Alumnos por GradoGET: /consultar-alumno/{grado}/
    Ejemplo: /consultar-alumno/Primero/

3. Autenticación
    Todas las solicitudes deben incluir el header API-KEY:
        - **Key:** API-KEY  
        - **Value:** tu_api_key_secreta

## Ejemplo de Uso en Postman
**Authorization:** Ninguna (el API Key se pasa en Headers).

**Headers:**
    API-KEY: tu_api_key_secreta

