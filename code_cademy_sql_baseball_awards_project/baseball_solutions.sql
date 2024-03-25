-- Heaviest Hitters
-- This award goes to the team with the highest average weight of its batters on a given year.

SELECT 
	AVG(people.weight), 
	teams.name, 
	batting.yearid 
FROM people 
INNER JOIN batting 
	ON people.playerid = batting.playerid
INNER JOIN teams
	ON batting.team_id = teams.id
GROUP BY 
	teams.name,
	batting.yearid
ORDER BY
	AVG(people.weight) DESC;

-- Shortest Sluggers
-- This award goes to the team with the smallest average height of its batters on a given year.

SELECT 
	AVG(p.height), 
	t.name, 
	b.yearid 
FROM people p
INNER JOIN batting b
	ON p.playerid = b.playerid
INNER JOIN teams t
	ON b.team_id = t.id
GROUP BY 
	t.name, 
	b.yearid
ORDER BY 
	AVG(p.height);

-- Biggest Spenders
-- This award goes to the team with the largest total salary of all players in a given year.

SELECT 
	SUM(salary), 
	t.name, 
	s.yearid 
FROM salaries s
LEFT JOIN teams t
	ON t.teamid = s.teamid 
	AND t.yearid = s.yearid
GROUP BY 
	t.name, 
	s.yearid
ORDER BY
	SUM(salary) DESC;


/*
Most Bang For Their Buck In 2010
This award goes to the team that had the smallest "cost per win" in 2010. Cost per win is determined by the
total salary of the team divided by the number of wins in a given year. Note that we decided to look at just
teams in 2010 because when we found this award looking across all years, we found that due to inflation, teams
from the 1900s spent much less money per win. We thought that looking at all teams in just the year 2010 gave
a more interesting statistic. 
*/

SELECT 
	t.name,
  	t.w,
 	 ROUND(SUM(s.salary)/t.w) AS cost_per_win
FROM teams t
JOIN salaries s
	ON s.teamid = t.teamid
  	AND s.yearid = t.yearid

WHERE t.yearid = 2010
GROUP BY t.name,
		t.w
ORDER BY cost_per_win;

/*  
Priciest Starter
This award goes to the pitcher who, in a given year, cost the most money per game in which they were the
starting pitcher. Note that many pitchers only started a single game, so to be eligible for this award, you had to
start at least 10 games. 
*/


SELECT 
	people.namefirst,
	people.namelast, 
	ROUND(s.salary/p.g) as cost_per_game, 
	s.yearid, 
	p.g
FROM salaries s
INNER JOIN pitching p
	ON s.playerid = p.playerid 
	AND s.yearid = p.yearid 
	AND s.teamid = p.teamid 
INNER JOIN people 
	ON s.playerid = people.playerid
WHERE p.g > 10
ORDER BY 
	s.salary/p.g DESC;