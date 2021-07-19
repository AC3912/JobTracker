#INSERT INTO user (user_id, user_name, password) VALUES ("1", "first", "pass1");
#INSERT INTO skill (skill_id, skill_name, user_id, proficiency) VALUES ("1", "a skill", "1", 1);
#INSERT INTO job (job_id, company_id, user_id, job_title, availability, application_status, type) VALUES ("1", "1", "1", "first job", "open", "applied", "full-time");
#INSERT INTO company(company_id, company_name, user_id) VALUES ("1", "rand co.", "1");
#INSERT INTO job_skill (job_skill_id, skill_id, job_id) VALUES ("1", "1", "1");
#INSERT INTO contact (contact_id, contact_name, company_id, user_id, role, email, phone_number) VALUES ("1", "first contact", "1", "1", "test person", "email@email.com", "555-2151");

#SELECT user_id, user_name, password FROM user;
#SELECT skill_id, skill_name, user_id, proficiency FROM skill;
#SELECT job_id, company_id, user_id, job_title, availability, application_status, type FROM job;
#SELECT company_id, company_name, user_id FROM company;
#SELECT job_skill_id, skill_id, job_id FROM job_skill;
#SELECT contact_id, contact_name, company_id, user_id, role, email, phone_number FROM contact;