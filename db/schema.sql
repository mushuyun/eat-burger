drop DATABASE if EXISTS burgers_db;

create DATABASE burgers_db;
use burgers_db;

CREATE TABLE burgers(
    id INTEGER auto_increment not null,
    burger_name VARCHAR(60),
    devoured boolean DEFAULT false,
    PRIMARY key (id)
);