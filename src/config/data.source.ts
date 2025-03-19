import { DataSource, DataSourceOptions } from "typeorm";
export const DataSourceConfig: DataSourceOptions = {

}

export const AppDS = new DataSource(DataSourceConfig)