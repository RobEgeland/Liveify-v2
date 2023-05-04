# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:

User.destroy_all
Artist.destroy_all
Concert.destroy_all
Performance.destroy_all
Genre.destroy_all

rob = User.create(username: "Rob", age: 23, password_digest: BCrypt::Password.create('Rob'))
charlie = User.create(username: "Charlie", age: 19, password_digest: BCrypt::Password.create('Charlie'))
leah = User.create(username: "Leah", age: 17, password_digest: BCrypt::Password.create('Leah'))
hannah = User.create(username: "Hannah", age: 24, password_digest: BCrypt::Password.create('Hannah'))
lucas = User.create(username: "Lucas", age: 15, password_digest: BCrypt::Password.create('Lucas'))
larry = User.create(username: "Larry", age: 25, password_digest: BCrypt::Password.create('Larry'))
ed = User.create(username: "Ed", age: 40, password_digest: BCrypt::Password.create('Ed'))
jessica = User.create(username: "Jessica", age: 22, password_digest: BCrypt::Password.create('Jessica'))

psych_rock = Genre.create(name: "Psychedelic Rock")
alt = Genre.create(name: "Alternative")
edm = Genre.create(name: "Electronic Dance")


tame = Artist.create(name: "Tame Impala", genre_id: psych_rock.id, band_members: 4, band_img: "https://beat.com.au/wp-content/uploads/2018/07/tames.jpg")
gorillaz = Artist.create(name: "Gorillaz", genre_id: alt.id, band_members: 4, band_img: "https://www.nme.com/wp-content/uploads/2021/09/gorillaz-2021@2000x1270-1.jpg")
phoenix = Artist.create(name: "Phoenix", genre_id: alt.id, band_members: 4, band_img: "http://pilerats.com/assets/Uploads/phoenix-new-album-2020.jpg")
pink_floyd = Artist.create(name: "Pink Floyd", genre_id: psych_rock.id, band_members: 4, band_img: "https://i.scdn.co/image/d011c95081cd9a329e506abd7ded47535d524a07")
goth_babe = Artist.create(name: "Goth Babe", genre_id: alt.id, band_members: 1, band_img: "https://images.squarespace-cdn.com/content/v1/586d703af7e0ab58e693a869/1542598230762-RC3OK5OZWIB6WWYXGYS2/image2.jpeg?format=1000w")
arcade_fire = Artist.create(name: "Arcade Fire", genre_id: alt.id, band_members: 6, band_img: "https://i.guim.co.uk/img/media/da207ed976e1b316bab8a8ae547b6dbdc992911f/504_0_4674_2805/master/4674.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0f625bcdff3a9aede290d4cfa832dcfa")
moby = Artist.create(name: "Moby", genre_id: edm.id, band_members: 1, band_img: "https://moby.com/wp-content/uploads/2021/05/moby-doc-full-bg-copy-500x500.jpeg")
tycho = Artist.create(name: "Tycho", genre_id: edm.id, band_members: 1, band_img: "https://images.squarespace-cdn.com/content/v1/5cb099837046801bf8ed1e65/1580310259680-LJFFNTI3X0H48U1DDBL8/Tycho+-+Press+LA2020-Small.jpg?format=2500w")
rem = Artist.create(name: "R.E.M", genre_id: alt.id, band_members: 4, band_img: "https://www.billboard.com/wp-content/uploads/media/rem-1990-billboard-650.jpg")

lolla = Concert.create(name: "Lollapalooza", location: "Chicago, IL", review: "was a great concert, a little to expensive though", user_id: rob.id)
bonnaroo = Concert.create(name: "Bonnaroo", location: "Manchester, TN", review: "was absolutley amazing, view was beautiful", user_id: charlie.id)
acl = Concert.create(name: "Austin City Limit", location: "Austin, TX", review: "was really cool, very hot", user_id: leah.id)
coachella = Concert.create(name: "Coachella", location: "Indio, CA", review: "was a great concert, a little to expensive though", user_id: hannah.id)
sbs = Concert.create(name: "South by Southwest", location: "Austin, TX", review: "was ok, didnt know many people there", user_id: lucas.id)

tame_lolla = Performance.create(concert_id: lolla.id, artist_id: tame.id)
moby_lolla = Performance.create(concert_id: lolla.id, artist_id: moby.id)
tycho_lolla = Performance.create(concert_id: lolla.id, artist_id: tycho.id)

phoenix_bonnaroo = Performance.create(concert_id: bonnaroo.id, artist_id: phoenix.id)
rem_bonnaroo = Performance.create(concert_id: bonnaroo.id, artist_id: rem.id)

arcade_acl = Performance.create(concert_id: acl.id, artist_id: arcade_fire.id)
goth_acl = Performance.create(concert_id: acl.id, artist_id: goth_babe.id)

gorillaz_coachella = Performance.create(concert_id: coachella.id, artist_id: gorillaz.id)
pink_coachella = Performance.create(concert_id: coachella.id, artist_id: pink_floyd.id)
tame_coachella = Performance.create(concert_id: coachella.id, artist_id: tame.id)

moby_sbs = Performance.create(concert_id: sbs.id, artist_id: moby.id)
tycho_sbs = Performance.create(concert_id: sbs.id, artist_id: tycho.id)












#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
