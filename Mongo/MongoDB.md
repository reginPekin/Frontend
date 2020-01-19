# MongoDB Traversy tutorual

structure --> db.collectionName.function()

example: 
	db.posts.find().sort({title: 1}).pretty()
	db.posts.find().count() === db.posts.count()
	db.posts.find().sort({title: -1}).limit(4).pretty()
	db.posts.find().forEach(function(doc){print('Blog Post: ' + doc.title)})


find()
count()
sort()
insert()
dropDatabase()
limit()
findOne()
forEach()
$elemMatch
$text
$search
$gt (greater than)

$gte (greater than or equal)
|
example: db.posts.find({views: {$gte: 6}} ).pretty()

update() 
|
example: 
db.posts.update({title: 'Post Two'},
	{
		$set: {
			body: 'Body of post two',
			category: 'Animals'
		}
	}
)

$inc - increment (+)
|
example: 
db.posts.update({ title: 'Post One' }, { $inc: { likes: 2 } })
// likes: 4 ---> likes: 6

$rename
|
example: 
db.posts.update({ title: 'Post One' }, { $rename: { likes: 'veiws'} })
// likes: 6 ---> views: 6


