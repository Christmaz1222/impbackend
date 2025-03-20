import { ConfigModule, ConfigService } from "@nestjs/config";
import { DataSource, DataSourceOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
});

const configService = new ConfigService()
export const DataSourceConfig: DataSourceOptions = {

    type: "postgres",
    host: configService.get('DB_HOST'),
    port: parseInt(configService.get('DB_PORT') || '5432', 10),
    username: configService.get('DB_USER'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    synchronize: false, 
    entities: [__dirname + "dist/**/*.entity{.ts,.js}"],
    migrations: [__dirname + "dist/migrations/*{.ts,.js}"],
    migrationsRun: true,
    logging: false,
    namingStrategy: new SnakeNamingStrategy(),

}

export const AppDS = new DataSource(DataSourceConfig);