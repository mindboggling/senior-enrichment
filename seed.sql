/* Run in terminal --> psql -d campus -a -f path/to/seed.sql */

INSERT INTO campuses
  (name, image, content)
VALUES
  ('Fortress of Solitude', 'http://i65.tinypic.com/2dbqq6c.jpg', 'The Fortress of Solitude is a fictional fortress appearing in American comic books published by DC Comics, commonly in association with Superman. A place of solace and occasional headquarters for Superman, the fortress is typically depicted as being in frozen tundra, away from civilization.[1] Its predecessor, Superman''s "Secret Citadel", first appeared in Superman #17, where it was said to be built into a mountain on the outskirts of Metropolis. By issue #58 (May–June 1949) it is referred to as the Fortress of Solitude, seems at a glance to be a freestanding castle, and is said to be located in a "polar waste". When the Fortress reappears in 1958 and for the first time takes center stage in a story ("The Super-Key to Fort Superman", Action Comics #241), it is again an underground complex in a mountainous cliffside.

Traditionally, the Fortress of Solitude is located in the Arctic,[1] though more recent versions of the Superman comics have placed the Fortress in other locations, including the Antarctic, the Andes, and the Amazon rainforest. The general public in Superman''s world is either unaware or at best only vaguely aware of the existence of the Fortress, and its location is kept secret from all but Superman''s closest friends and allies (such as Lois Lane and Batman). A trademark of the Fortress is that it contains a memorial statue of Jor-El and Lara, Superman''s Kryptonian parents, holding a large globe of Krypton. Although Superman has living quarters at the Fortress, his main residence is still Clark Kent''s apartment in Metropolis. The arctic Fortress of Solitude concept was first created for pulp hero Doc Savage during the 1930s.');
INSERT INTO campuses
  (name, image, content)
VALUES
  ('Batcave', 'http://i65.tinypic.com/oghsad.jpg', 'The Batcave is a fictional subterranean location appearing in American comic books published by DC Comics. It is the secret headquarters of the superhero Batman, whose secret identity is Bruce Wayne, consisting of a series of underground caves beneath his personal residence, Wayne Manor.');
INSERT INTO campuses
  (name, image, content)
VALUES
  ('Stark Tower', 'http://i68.tinypic.com/28r30p2.jpg', 'The Stark Tower Complex is a fictional high-rise building complex appearing in American comic books published by Marvel Comics. Located in Midtown Manhattan, New York City, USA, the complex is named after its owner Tony Stark, who is the alter ego of the superhero Iron Man. The structure is composed of a 93-story Main Tower flanked by a 35-story South Building and 55-story North Building. Located at the top of the Main Tower was the Watchtower of the superhero The Sentry, but it has been replaced by Heimdall''s observatory. The Main Tower is informally known as Avengers Tower, as it serves as the headquarters of the superhero team, the Avengers, similar to the Avengers Mansion. Currently, the main Stark Tower is located in Broadway, occupying the space of the Condé Nast Building.');
INSERT INTO campuses
  (name, image, content)
VALUES
  ('Asgard', 'http://i68.tinypic.com/spj6er.jpg', 'Asgard is the name of a fictional realm and its capital city appearing in American comic books published by Marvel Comics. Based on the realm of the same name from Norse mythology, Asgard is home to the Asgardians and other beings adapted from Norse mythology. Asgard first appeared in Journey into Mystery #83 (October 1962) by Stan Lee, Larry Lieber and Jack Kirby, and features prominently in stories that follow the Marvel Comics superhero, Thor.');
INSERT INTO campuses
  (name, image, content)
VALUES
  ('Themyscira', 'http://i66.tinypic.com/ibdog9.jpg', 'Themyscira (/ˌθɛmᵻˈskɪrə/) is a fictional, lush city-state and island nation appearing in American comic books published by DC Comics.

Originally known as Paradise Island, it first appeared in All Star Comics #8 (December 1941), and was created by William Moulton Marston to allegorize the safety and security of the home where women thrived apart from the hostile, male-dominated work place.[citation needed] It is governed by Aphrodite''s Law, which stated that "Under penalty of death, no Man may set foot on Themyscira."

Themyscira is the theocracy and capital city that serves as the Amazon peoples'' government and place of origin for Wonder Woman. The name for the entire archipelago became "The Paradise Islands", when the city was renamed "Themyscira" with the character''s February 1987 relaunch in Wonder Woman (vol. 2) #1.[2] Both the island and city are named after the mythological city of Themiscyra, the capital of the Amazon tribe in Greek mythology.');

INSERT INTO users
  (name, email, campus_id)
VALUES
  ('Jon Kent', 'jon.kent@superheroes.com', 1);
INSERT INTO users
  (name, email, campus_id)
VALUES
  ('Damian Wayne', 'damian.wayne@superheroes.com', 2);
INSERT INTO users
  (name, email, campus_id)
VALUES
  ('Howard Stark', 'howard.stark@superheroes.com', 3);
INSERT INTO users
  (name, email, campus_id)
VALUES
  ('Magni Thorson', 'magni.thorson@superheroes.com', 4);
INSERT INTO users
  (name, email, campus_id)
VALUES
  ('Donna Troy', 'donna.troy@superheroes.com', 5);
