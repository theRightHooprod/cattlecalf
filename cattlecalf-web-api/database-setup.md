<!--
 Copyright (C) 2025 theRightHoopRod

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License as
 published by the Free Software Foundation, either version 3 of the
 License, or (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <https://www.gnu.org/licenses/>.
-->

# How to setup the database to work with the API

This proyect works with `postgres` database.

After installing `psql` on the machine, login with your default administrator user (tipically `postgres` user) then, use this command to create a new database:

```sql
CREATE DATABASE mydatabase;
```

After creation, add a new role with a new secret password:

```sql
CREATE ROLE myuser WITH LOGIN PASSWORD 'mypassword';
```

Now give access to the previously created database:

```sql
GRANT ALL PRIVILEGES ON DATABASE mydatabase TO myuser;
GRANT ALL PRIVILEGES ON SCHEMA public TO myuser;
```

Now duplicate the file `.env.example` and rename to `.env` in the project root and replace the following connection string with the newly created role, databasename and password:

```
DATABASE_URL="postgresql://myuser:mypassword@localhost:5432/mydatabase?schema=public"
```
