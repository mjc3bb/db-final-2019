insert ignore into users  values (
	1, 'user', 'password', 122.22, Null
);

insert ignore into orders value (1, 1, "");

update users set currentOrderID=1 where userID=1;

insert ignore into tags(tagName) values
	( "American" ),( "Burgers" ),( "Ice Cream" ),
    ( "Sandwiches" ),( "Diner" ),( "Wraps" ),
    ( "Chicken" ),( "Pizza" ),( "Barbecue" ),
    ( "Wings" ),( "Bakery & Pastries" ),( "Coffee & Tea" ),
    ( "Steak" ),( "Mexican" ),( "Deli Food" ),
    ( "Salads" ),( "Southern" ),( "Hot Dogs" ),
    ( "French" ), ( "Italian" );

insert ignore into services(serviceName,serviceAddress,imageURI) values
	("Dairy Queen", "12 Northside Dr E STATESBORO, GA 30458","https://www.dqephrata.com/img/blizzard_header.jpg"),
	("Subway", "1550 Chandler Rd STATESBORO, GA 30458","https://bitrebels.com/wp-content/uploads/2019/05/subway-business-level-header-image.jpg"),
	("Mellow Mushroom", "1098 Bermuda Run Statesboro, GA 30458","https://thefridgeagency.com/wp-content/uploads/sites/3/2018/03/mellow_catering_casestudy_header.jpg"),
	("Huddle House", "216 Lanier Dr STATESBORO, GA 30458","https://gordon.armymwr.com/application/files/4915/1871/4190/Huddle-House-Header.jpg"),
	("Zaxby's", "1605 Chandler Rd Statesboro, GA 30458","https://www.paytronix.com/media/18996527/zaxbys_resource_image.jpg"),
	("Larry's Giant Subs", "620 Fair Rd STATESBORO, GA 30458","https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_205,h_205,f_auto,fl_lossy,q_80,c_fit/ys5i46xe2uwi64tdcrim"),
	("Taco Bell", "729 Northside Dr E Statesboro, GA 30458","https://media.comicbook.com/2018/10/taco-bell-logo-header-1139988-1280x0.jpeg"),
	("Baskin-Robbins", "606 Fair Rd STATESBORO, GA 30458","https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/1_yclx287n/def_height/315/def_width/600/version/100011/type/2/q/100"),
	("Papa John's Pizza", "620 Fair Rd STATESBORO, GA 30458","https://lh3.googleusercontent.com/FZczSxluozeQ5CQQy-D8NnMBHvNfsaSDq2-J-OC2CgHlURb5d1BX8sAlaZTqdyi--vCGmxtsag=w1080-h608-p-no-v0"),
	("Wendy's", "10 College Plz STATESBORO, GA 30458","https://www.lls.org/sites/default/files/chapters/Wendy%27s%20Header%20V2.png"),
	("Olive Garden", "201 Henry Blvd Statesboro, GA 30458","https://s14415.pcdn.co/wp-content/uploads/2017/07/olive-garden-header.jpg"),
	("Krystal", "781 Brannen Rd Statesboro, GA 30458","https://memphischamber.com/wp-content/uploads/2018/11/MMM-Blog-Header-63.png"),
	("Pizza Hut", "129 S Main St STATESBORO, GA 30458","https://static.vinepair.com/wp-content/uploads/2019/01/pizza-hut-header.jpg"),
	("Shane's Rib Shack", "1100 Brampton Avenue Statesboro, GA 30458","https://shanesmedia.azureedge.net/fullpanel/uploads/files/smoked-wings---new-header.jpg"),
	("Zaxby's", "502 Fair Rd STATESBORO, GA 30458","https://www.paytronix.com/media/18996527/zaxbys_resource_image.jpg"),
	("Sonic", "880 Buckhead Dr STATESBORO, GA 30458","https://i1.wp.com/wslmradio.com/wp-content/uploads/2017/02/copy_sonicdrivein_240_header.jpg"),
	("Daylight Donuts", "455 S Main St STATESBORO, GA 30458","https://lh3.googleusercontent.com/kzk4rhSaA0al20AG-UsU7GikVRzYCb7Mm9OSeQhI4q8dkVMNmdmVyIwuCZXvCR47rK8vAm_Q=w1080-h608-p-no-v0"),
	("McDonald's", "611 Northside Dr E STATESBORO, GA 30458","https://i1.wp.com/coverlettersandresume.com/wp-content/uploads/Mcdonalds-Cover-Letter-Header.jpg?fit=573%2C300&ssl=1"),
	("LongHorn Steakhouse", "719 Northside Dr W STATESBORO, GA 30458","https://www.fsrmagazine.com/sites/default/files/styles/story_image_720x430/public/feature-images/how-darden-artfully-built-longhorn-steakhouse-juggernaut.jpg?itok=FHG6YeVN"),
	("KFC - Kentucky Fried Chicken", "898 Buckhead Dr STATESBORO, GA 30458","http://www.kfc.co.zw/wp-content/uploads/2015/11/LinkedInHeader.png"),
	("Waffle House", "609 Northside Dr E STATESBORO, GA 30458","https://www.playnetwork.com/wp-content/uploads/2018/09/1400x640-Header-Image.jpg"),
	("Subway", "611a Northside Dr W STATESBORO, GA 30458","https://bitrebels.com/wp-content/uploads/2019/05/subway-business-level-header-image.jpg"),
	("El Sombrero", "879 Buckhead Dr. Statesboro, GA 30458","http://elsombrerotexas.com/wp-content/uploads/2018/08/El-Sombrero-Header-2.jpg"),
	("Popeyes Chicken & Biscuits", "536 Fair Rd STATESBORO, GA 30458","https://images.dailyhive.com/20180919155652/13597810_264794297222795_428111068_n.jpg"),
	("Moe's Southwest Grill", "608 Brannen St STATESBORO, GA 30458","https://gunaxin.com/wp-content/uploads/2017/07/Moes-Header-Image.jpg"),
	("Your Pie Pizza", "701 Piedmont Loop, Ste 200 Statesboro, GA 30458","https://s.hdnux.com/photos/43/31/30/9278993/3/920x920.jpg"),
	("Panera Bread", "810 Buckhead Drive Statesboro, GA 30458","http://roxburynjchamber.org/wp-content/uploads/panera-bread-847x477.jpg"),
	("Locos Grill and Pub", "91 Briarwood Ln STATESBORO, GA 30458","https://lh3.googleusercontent.com/8f1Sa0_aSX7_lp7GDvxEqQvz3QH_TuF_wD3fmCEXLWs15dzuEhX-tNHcMy1dY_8OSBfQRS2o=w1080-h608-p-no-v0"),
	("McAlister's Deli", "1100 Brampton Ave STATESBORO, GA 30458","https://www.gannett-cdn.com/-mm-/fd0c8952bec06b534851365c84a7c2076a923340/c=0-83-4926-2866/local/-/media/2017/02/14/FortMyers/FortMyers/636226855169587730-McAlister-s-Exterior-Signage.jpg"),
	("Pizza Hut", "839 Buckhead Dr STATESBORO, GA 30458","https://static.vinepair.com/wp-content/uploads/2019/01/pizza-hut-header.jpg"),
	("Subway", "510 S Main St STATESBORO, GA 30458","https://bitrebels.com/wp-content/uploads/2019/05/subway-business-level-header-image.jpg"),
	("Sonny's Bar-B-Q", "1602 Statesboro Place Cir STATESBORO, GA 30458","https://api.sonnysbbq.com/app/uploads/2019/04/Sonnys-Promo2-20-3-1024x683.jpg"),
	("Arby's", "622 Fair Rd Statesboro, GA 30458","https://arbys.com/images/about/arbys-about-us-header.jpg"),
	("Burger King", "550 Fair Rd STATESBORO, GA 30458","http://www.clactonshoppingvillage.com/wp-content/uploads/2018/08/Burger-King-Header.jpg"),
	("Sonic", "322 S Main St STATESBORO, GA 30458","https://i1.wp.com/wslmradio.com/wp-content/uploads/2017/02/copy_sonicdrivein_240_header.jpg"),
	("Buffalo Wild Wings", "442 Northside Drive East Statesboro, GA 30458","http://www.gilberttownsquare.com/images/BuffaloWildWings-header-881.jpg"),
	("McDonald's", "730 Northside Dr E STATESBORO, GA 30458","https://i1.wp.com/coverlettersandresume.com/wp-content/uploads/Mcdonalds-Cover-Letter-Header.jpg?fit=573%2C300&ssl=1"),
	("Chick-fil-A", "703 Northside Dr W STATESBORO, GA 30458","https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/sandysprings/Chick-fil-a-Northridge-DTO---logo-resized-95aaa9a05056b3a_95aaaa9b-5056-b3a8-493eb82fb0c5d336.jpg");

insert ignore into serviceTags
select t.tagID, s.serviceID
from (
	select serviceID
    from services
    where serviceName in ("Dairy Queen",
						"Huddle House",
						"Zaxby's",
						"Larry's Giant Subs",
						"Baskin-Robbins",
						"KFC - Kentucky Fried Chicken",
						"Papa John's Pizza",
						"Quiznos Sub",
						"Wendy's",
						"Pizza Hut",
						"Pizza Inn",
						"Zaxby's",
						"Sonic",
						"Daylight Donuts",
						"McDonald's",
						"LongHorn Steakhouse",
						"KFC - Kentucky Fried Chicken",
						"Ruby Tuesdays",
						"Waffle House",
						"Popeyes Chicken & Biscuits",
						"Chester's",
						"Quiznos Sub",
						"Locos Grill and Pub",
						"McAlister's Deli",
						"Pizza Hut",
						"Sonny's Bar-B-Q",
						"Arby's",
						"Checkers",
						"Burger King",
						"Sonic",
						"McDonald's",
						"Chick-fil-A")
    ) as s,
	(select tagID from tags where tagName="American") as t;

insert ignore into serviceTags
select t.tagID, s.serviceID
from (
	select serviceID
    from services
    where serviceName in ("Dairy Queen",
						"Wendy's",
						"Sonic",
						"McDonald's",
						"Ruby Tuesdays",
						"Arby's",
						"Checkers",
						"Burger King",
						"Sonic",
						"McDonald's",
                        "Krystal")
    ) as s,
	(select tagID from tags where tagName="Burgers") as t;

insert ignore into serviceTags
select t.tagID, s.serviceID
from (
	select serviceID
    from services
    where serviceName in ("Dairy Queen",
						"Baskin-Robbins")
    ) as s,
	(select tagID from tags where tagName="Ice Cream") as t;

insert ignore into serviceTags
select t.tagID, s.serviceID
from (
	select serviceID
    from services
    where serviceName in ("Subway",
						"Larry's Giant Subs",
						"Quiznos Sub",
						"Subway",
						"Subway",
						"Groucho's Deli of Statesboro",
						"Quiznos Sub",
						"McAlister's Deli",
						"Subway",
						"Sonny's Bar-B-Q",
						"Checkers",
						"Chick-fil-A",
                        "Panera Bread")
    ) as s,
	(select tagID from tags where tagName="Sandwiches") as t;

insert ignore into serviceTags
select t.tagID, s.serviceID
from (
	select serviceID
    from services
    where serviceName in ("Huddle House",
						"Don Corleone's Diner & Pasta")
    ) as s,
	(select tagID from tags where tagName="Diner") as t;

insert ignore into serviceTags
select t.tagID, s.serviceID
from (
	select serviceID
    from services
    where serviceName in ("Larry's Giant Subs",
						"Quiznos Sub",
						"Quiznos Sub",
						"McAlister's Deli",
						"Checkers")
    ) as s,
	(select tagID from tags where tagName="Wraps") as t;

insert ignore into serviceTags
select t.tagID, s.serviceID
from (
	select serviceID
    from services
    where serviceName in ("KFC - Kentucky Fried Chicken",
						"KFC - Kentucky Fried Chicken",
						"Chick-fil-A")
    ) as s,
	(select tagID from tags where tagName="Chicken") as t;

insert ignore into serviceTags
select t.tagID, s.serviceID
from (
	select serviceID
    from services
    where serviceName in ("Papa John's Pizza",
						"Pizza Hut",
						"Pizza Inn",
						"Don Corleone's Diner & Pasta",
						"Pizza Hut",
                        "Mellow Mushroom",
                        "Your Pie Pizza")
    ) as s,
	(select tagID from tags where tagName="Pizza") as t;

insert ignore into serviceTags
select t.tagID, s.serviceID
from (
	select serviceID
    from services
    where serviceName in ("Shane's Rib Shack",
						"Sonny's Bar-B-Q")
    ) as s,
	(select tagID from tags where tagName="Barbecue") as t;

insert ignore into serviceTags
select t.tagID, s.serviceID
from (
	select serviceID
    from services
    where serviceName in ("Zaxby's",
						"Popeyes Chicken & Biscuits",
						"Don Corleone's Diner & Pasta",
                        "Buffalo Wild Wings")
    ) as s,
	(select tagID from tags where tagName="Wings") as t;

insert ignore into serviceTags
select t.tagID, s.serviceID
from (
	select serviceID
    from services
    where serviceName in ("Daylight Donuts")
    ) as s,
	(select tagID from tags where tagName="Bakery & Pastries") as t;

insert ignore into serviceTags
select t.tagID, s.serviceID
from (
	select serviceID
    from services
    where serviceName in ("Daylight Donuts")
    ) as s,
	(select tagID from tags where tagName="Coffee & Tea") as t;

insert ignore into serviceTags
select t.tagID, s.serviceID
from (
	select serviceID
    from services
    where serviceName in ("LongHorn Steakhouse")
    ) as s,
	(select tagID from tags where tagName="Steak") as t;

insert ignore into serviceTags
select t.tagID, s.serviceID
from (
	select serviceID
    from services
    where serviceName in ("Moe's Southwest Grill",
						"El Sombrero",
                        "Taco Bell")
    ) as s,
	(select tagID from tags where tagName="Mexican") as t;

insert ignore into serviceTags
select t.tagID, s.serviceID
from (
	select serviceID
    from services
    where serviceName in ("McAlister's Deli")
    ) as s,
	(select tagID from tags where tagName="Deli Food") as t;

insert ignore into serviceTags
select t.tagID, s.serviceID
from (
	select serviceID
    from services
    where serviceName in ("McAlister's Deli",
						"Chick-fil-A")
    ) as s,
	(select tagID from tags where tagName="Salads") as t;

insert ignore into serviceTags
select t.tagID, s.serviceID
from (
	select serviceID
    from services
    where serviceName in ("Sonny's Bar-B-Q")
    ) as s,
	(select tagID from tags where tagName="Southern") as t;

insert ignore into serviceTags
select t.tagID, s.serviceID
from (
	select serviceID
    from services
    where serviceName in ("Checkers")
    ) as s,
	(select tagID from tags where tagName="Hot Dogs") as t;

insert ignore into serviceTags
select t.tagID, s.serviceID
from (
	select serviceID
    from services
    where serviceName in ("French Quarter Cafe")
    ) as s,
	(select tagID from tags where tagName="French") as t;

insert ignore into serviceTags
select t.tagID, s.serviceID
from (
	select serviceID
    from services
    where serviceName in ("Olive Garden")
    ) as s,
	(select tagID from tags where tagName="Italian") as t;

insert ignore into serviceItems(serviceID, itemName, itemDescription, itemPrice)
select s.serviceID, i.itemName, i.itemDescription, i.itemPrice
from (select serviceID from services) as s,
(select "Item 1" as itemName, "description" as itemDescription, 3.50 as itemPrice) as i;

insert ignore into serviceItems(serviceID, itemName, itemDescription, itemPrice)
select s.serviceID, i.itemName, i.itemDescription, i.itemPrice
from (select serviceID from services) as s,
(select "Item 2" as itemName, "description" as itemDescription, 8.99 as itemPrice) as i;

insert ignore into serviceItems(serviceID, itemName, itemDescription, itemPrice)
select s.serviceID, i.itemName, i.itemDescription, i.itemPrice
from (select serviceID from services) as s,
(select "Item 3" as itemName, "description" as itemDescription, 8.99 as itemPrice) as i;

insert ignore into serviceItems(serviceID, itemName, itemDescription, itemPrice)
select s.serviceID, i.itemName, i.itemDescription, i.itemPrice
from (select serviceID from services) as s,
(select "Item 4" as itemName, "description" as itemDescription, 8.99 as itemPrice) as i;

insert ignore into serviceItems(serviceID, itemName, itemDescription, itemPrice)
select s.serviceID, i.itemName, i.itemDescription, i.itemPrice
from (select serviceID from services) as s,
(select "Item 5" as itemName, "description" as itemDescription, 8.99 as itemPrice) as i;

insert ignore into serviceItems(serviceID, itemName, itemDescription, itemPrice)
select s.serviceID, i.itemName, i.itemDescription, i.itemPrice
from (select serviceID from services) as s,
(select "Item 6" as itemName, "description" as itemDescription, 8.99 as itemPrice) as i;

insert ignore into serviceItems(serviceID, itemName, itemDescription, itemPrice)
select s.serviceID, i.itemName, i.itemDescription, i.itemPrice
from (select serviceID from services) as s,
(select "Item 7" as itemName, "description" as itemDescription, 8.99 as itemPrice) as i;

insert ignore into serviceItems(serviceID, itemName, itemDescription, itemPrice)
select s.serviceID, i.itemName, i.itemDescription, i.itemPrice
from (select serviceID from services) as s,
(select "Item 8" as itemName, "description" as itemDescription, 8.99 as itemPrice) as i;
