db = db.getSiblingDB("animal_db");
db.animal_tb.drop();

db.animal_tb.insertMany([
	{
		"id":1,
		"name":"Cat",
		"type":"domestic"
	},
	{
		"id":2,
		"name":"Eagle",
		"type":"wild"
	},
	{
		"id":3,
		"name":"Platypus",
		"type":"wild"
	}
]);