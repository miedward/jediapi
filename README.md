MariaDB [jediweb]> show tables;
+-------------------+
| Tables_in_jediweb |
+-------------------+
| CareerSkill_R     |
| Careers           |
| Difficulties      |
| Jedi              |
| JediSkill_R       |
| Skills            |
| TradSkillOld_R    |
| TraditionSkill_R  |
| Traditions        |
+-------------------+
9 rows in set (0.000 sec)

MariaDB [jediweb]> describe CareerSkill_R;
+--------------+---------+------+-----+---------+-------+
| Field        | Type    | Null | Key | Default | Extra |
+--------------+---------+------+-----+---------+-------+
| CareerNumber | int(11) | YES  |     | NULL    |       |
| SkillNumber  | int(11) | YES  |     | NULL    |       |
| Difficulty   | int(11) | YES  |     | NULL    |       |
+--------------+---------+------+-----+---------+-------+
3 rows in set (0.008 sec)

MariaDB [jediweb]> describe Careers;
+---------------+--------------+------+-----+---------+-------+
| Field         | Type         | Null | Key | Default | Extra |
+---------------+--------------+------+-----+---------+-------+
| CareerNumber  | int(11)      | YES  |     | NULL    |       |
| Name          | varchar(100) | YES  |     | NULL    |       |
| Description   | text         | YES  |     | NULL    |       |
| AmishComments | text         | YES  |     | NULL    |       |
+---------------+--------------+------+-----+---------+-------+
4 rows in set (0.007 sec)

MariaDB [jediweb]> describe Difficulties;
+------------------+--------------+------+-----+---------+-------+
| Field            | Type         | Null | Key | Default | Extra |
+------------------+--------------+------+-----+---------+-------+
| difficultynumber | int(11)      | YES  |     | NULL    |       |
| difficulty       | varchar(6)   | YES  |     | NULL    |       |
| difficutly_long  | varchar(100) | YES  |     | NULL    |       |
+------------------+--------------+------+-----+---------+-------+
3 rows in set (0.007 sec)

MariaDB [jediweb]> describe Jedi;
+-----------------+--------------+------+-----+---------+-------+
| Field           | Type         | Null | Key | Default | Extra |
+-----------------+--------------+------+-----+---------+-------+
| ID              | int(11)      | YES  |     | NULL    |       |
| Name            | varchar(100) | YES  |     | NULL    |       |
| Password        | varchar(100) | YES  |     | NULL    |       |
| Sense           | int(11)      | YES  |     | NULL    |       |
| Control         | int(11)      | YES  |     | NULL    |       |
| Alter           | int(11)      | YES  |     | NULL    |       |
| CareerNumber    | int(11)      | YES  |     | NULL    |       |
| TraditionNumber | int(11)      | YES  |     | NULL    |       |
| SecondNumber    | int(11)      | YES  |     | NULL    |       |
| SkillPoints     | int(11)      | YES  |     | NULL    |       |
| Quest1          | int(11)      | YES  |     | NULL    |       |
+-----------------+--------------+------+-----+---------+-------+
11 rows in set (0.008 sec)

MariaDB [jediweb]> describe JediSkill_R;
+-------------+---------+------+-----+---------+-------+
| Field       | Type    | Null | Key | Default | Extra |
+-------------+---------+------+-----+---------+-------+
| ID          | int(11) | YES  |     | NULL    |       |
| SkillNumber | int(11) | YES  |     | NULL    |       |
| Level       | int(11) | YES  |     | NULL    |       |
+-------------+---------+------+-----+---------+-------+
3 rows in set (0.007 sec)

MariaDB [jediweb]> describe Skills;
+---------------+--------------+------+-----+---------+-------+
| Field         | Type         | Null | Key | Default | Extra |
+---------------+--------------+------+-----+---------+-------+
| SkillNumber   | int(11)      | YES  |     | NULL    |       |
| Name          | varchar(100) | YES  |     | NULL    |       |
| Description   | text         | YES  |     | NULL    |       |
| Max           | int(11)      | YES  |     | NULL    |       |
| Sense         | int(11)      | YES  |     | NULL    |       |
| Control       | int(11)      | YES  |     | NULL    |       |
| Alter         | int(11)      | YES  |     | NULL    |       |
| (Alter)       | int(11)      | YES  |     | NULL    |       |
| Restricted    | int(11)      | YES  |     | NULL    |       |
| AmishComments | text         | YES  |     | NULL    |       |
+---------------+--------------+------+-----+---------+-------+
10 rows in set (0.010 sec)

MariaDB [jediweb]> describe TraditionSkill_R;
+-----------------+---------+------+-----+---------+-------+
| Field           | Type    | Null | Key | Default | Extra |
+-----------------+---------+------+-----+---------+-------+
| TraditionNumber | int(11) | YES  |     | NULL    |       |
| Skillnumber     | int(11) | YES  |     | NULL    |       |
| modifier        | int(11) | YES  |     | NULL    |       |
+-----------------+---------+------+-----+---------+-------+
3 rows in set (0.007 sec)

MariaDB [jediweb]> describe Traditions;
+----------------------+--------------+------+-----+---------+-------+
| Field                | Type         | Null | Key | Default | Extra |
+----------------------+--------------+------+-----+---------+-------+
| TraditionNumber      | int(11)      | YES  |     | NULL    |       |
| Name                 | varchar(100) | YES  |     | NULL    |       |
| Description          | text         | YES  |     | NULL    |       |
| TraditionSkillNumber | int(11)      | YES  |     | NULL    |       |
+----------------------+--------------+------+-----+---------+-------+
4 rows in set (0.007 sec)

MariaDB [jediweb]> 
