/* create db */

CREATE TABLE COOURSE (
    course_num varchar(6),
    course_title varchar(25) NOT NULL,
    credit_hrs int NOT NULL,
    PRIMARY KEY (course_num)
);


/*add records to db*/



INSERT INTO COOURSE (course_num, course_title, credit_hrs)
VALUES (123456, 'stats', 3),
        (145676, 'literature', 3),
        (757448, 'computer science', 3),
        (345654, 'art', 3),
        (578439, 'physics lab', 1);




/*retrieve data*/

SELECT course_title FROM COOURSE;