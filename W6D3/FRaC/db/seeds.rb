# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# users_and_artworks = [
#   ['Carlos','',  'https://en.wikipedia.org/wiki/Mona_Lisa' ],
#   ['Artem','Untitled', 'https://en.wikipedia.org/wiki/Untitled_(The_Birth)'],
#   ['Chad', 'Statue of David', 'https://en.wikipedia.org/wiki/David_(Michelangelo)'],
#   ['Peter', 'Blah', 'https://en.wikipedia.org/wiki/Rugrats'],
#   ['Susan', 'Creation of the World', 'https://en.wikipedia.org/wiki/The_Creation_of_Adam'], 
# ]

User.destroy_all
Artwork.destroy_all

carlos = User.create!(username: 'Carlos')
artem = User.create!(username: 'Artem')
chad = User.create!(username: 'Chad')
peter = User.create!(username: 'Peter')
kafele = User.create!(username: 'Kafele')

mona_lisa = Artwork.create!(title: "Mona Lisa", image_url:"https://en.wikipedia.org/wiki/Mona_Lisa", artist_id: carlos.id)
untitled = Artwork.create!(title: "Untitled", image_url: "https://en.wikipedia.org/wiki/Untitled_(The_Birth)", artist_id: artem.id)
statue_of_david = Artwork.create!(title: "Statue of David",  image_url: "https://en.wikipedia.org/wiki/David_(Michelangelo)" , artist_id: chad.id)
blah = Artwork.create!(title: "Blah", image_url: "https://en.wikipedia.org/wiki/Rugrats", artist_id: peter.id)
the_creation_of_adam = Artwork.create!(title: "The Creation of Adam", image_url: "https://en.wikipedia.org/wiki/The_Creation_of_Adam", artist_id: kafele.id)
