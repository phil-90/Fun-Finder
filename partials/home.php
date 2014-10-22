<div class="container">
    <div class="row">
        <div>
            <h1 id="result">{{result}}</h1><br/>
            <h2>What would you like to do?</h2>
        </div>
    </div>
    <div id="optionsContainer">
        <div ng-click="changemarker('bar'); initialize(); showLink();"><h3><a href="">Bar</a></h3></div><div ng-click="changemarker('movie_theater'); initialize(); showLink();"><h3><a href="">Movie Theater</a></h3></div><div ng-click="changemarker('restaurant'); initialize(); showLink();"><h3><a href="">Restaurant</a></h3></div><div ng-click="changemarker('museum'); initialize(); showLink();"><h3><a href="">Museum</a></h3></div>
        <div ng-click="changemarker('bowling_alley'); initialize(); showLink();"><h3><a href="">Bowling Alley</a></h3></div><div ng-click="changemarker('casino'); initialize(); showLink();"><h3><a href="">Casino</a></h3></div><div ng-click="changemarker('zoo'); initialize(); showLink();"><h3><a href="">Zoo</a></h3></div><div ng-click="changemarker('spa'); initialize(); showLink();"><h3><a href="">Spa</a></h3></div>
        <div ng-click="changemarker('night_club'); initialize(); showLink();"><h3><a href="">Night Club</a></h3></div><div ng-click="changemarker('cafe'); initialize(); showLink();"><h3><a href="">Cafe</a></h3></div><div ng-click="changemarker('campground'); initialize(); showLink();"><h3><a href="">Campground</a></h3></div><div ng-click="changemarker('aquarium'); initialize(); showLink();"><h3><a href="">Aquarium</a></h3></div>
        <div ng-click="changemarker('liquor_store'); initialize(); showLink();"><h3><a href="">Mini Mart</a></h3></div><div ng-click="changemarker('shoe_store'); initialize(); showLink();"><h3><a href="">Shoe Store</a></h3></div><div ng-click="changemarker('lodging'); initialize(); showLink();"><h3><a href="">Lodging</a></h3></div><div ng-click="changemarker('hair_care'); initialize(); showLink();"><h3><a href="">Salon</a></h3></div>
        <div ng-click="changemarker('art_gallery'); initialize(); showLink();"><h3><a href="">Art Gallery</a></h3></div><div ng-click="changemarker('amusement_park'); initialize(); showLink();"><h3><a href="">Amusement Park</a></h3></div><div ng-click="changemarker('meal_delivery'); initialize(); showLink();"><h3><a href="">Food Delivery</a></h3></div><div ng-click="changemarker('grocery_or_supermarket'); initialize(); showLink();"><h3><a href="">Grocery Store</a></h3></div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div id="map-canvas" class="map-canvas" style="width: 82%; height: 420px; background: url('img/load.gif'); background-size: 100% 100%;"></div><br/><br/>
        </div>
        <div class="col-md-12">
            <div>
                <div><a ng-show="linker" id="placeLink" href="">Visit their Website!</a></div>
            </div>
        </div>
        <div class="col-md-12">
            <div>
                <div id="directions-panel"></div>
            </div>
        </div>
        
    </div>
</div>
