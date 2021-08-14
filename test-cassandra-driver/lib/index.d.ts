declare const cassandra: any;
declare const fs: any;
declare const auth: any;
declare const sslOptions1: {
    ca: any[];
    host: string;
    rejectUnauthorized: boolean;
};
declare const client: any;
declare const query = "SELECT * FROM system_schema.keyspaces";
