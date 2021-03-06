	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Mushroom",
		organic: true,
		dairyFree: true,
		nutFree: true,
		price: 1.09
	},
	{
		name: "Peanut Butter",
		organic: true,
		dairyFree: true,
		nutFree: false,
		price: 2.35
	},
	{
		name: "Tuna",
		organic: true,
		dairyFree: true,
		nutFree: true,
		price: 10
	},
	{
		name:"Spinach",
		organic: true,
		dairyFree: true,
		nutFree: true,
		price: 1.49
	},
	{
		name:"Almonds",
		organic: true,
		dairyFree: true,
		nutFree: false,
		price: 3
	},
	{
		name:"Milk",
		organic: true,
		dairyFree: false,
		nutFree: true,
		price: 6
	},
	{
		name:"Butter",
		organic: false,
		dairyFree: false,
		nutFree: true,
		price: 5.50
	},
	{
		name:"Nutella",
		organic: false,
		dairyFree: false,
		nutFree: false,
		price:6.90
	},
	{
		name:"Cashews",
		organic: true,
		dairyFree: true,
		nutFree: false,
		price: 1.25
	},
	{
		name:"Chocolate Chestnuts",
		organic: false,
		dairyFree: false,
		nutFree: false,
		price: 1.75
	},
	{
		name:"Protein Bar",
		organic: false,
		dairyFree: true,
		nutFree: false,
		price: 1.75
	},
	{
		name:"Dried Mango Slices",
		organic: false,
		dairyFree: true,
		nutFree: true,
		price: 5.69
	}

	
].sort((a,b) => b.price-a.price);
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(dairyFree, products, nutFree, organic, none) {
	let product_names = [];

	for (let i=0; i<products.length; i+=1) {


		//lactose intolerant + nut allergy check
		if ((dairyFree == true) && (nutFree == true)) {
			// organic restriction check
			if (organic == true) {
				if (products[i].organic == true && (products[i].dairyFree == true) && (products[i].nutFree == true)) {
					product_names.push(products[i]);
				}
			}
			else {
				if((products[i].dairyFree == true) && (products[i].nutFree == true)){
					product_names.push(products[i])
				}
				;
			}
		}
		//lactose intolerant check
		else if ((dairyFree == true) && (products[i].dairyFree == true)) {
            // organic check
            if (organic == true) {
                if (products[i].organic == true) {
                    product_names.push(products[i]);
                }
            }
            else {
                product_names.push(products[i]);
            }
        }

		//nut allergy check
		else if ((nutFree == true) && (products[i].nutFree == true)) {
            // organic check
            if (organic == true) {
                if (products[i].organic == true) {
                    product_names.push(products[i]);
                }
            }
            else {
                product_names.push(products[i]);
            }
        }		
		//organic check filter
		else if ((dairyFree == false) && (nutFree == false)) {
            if (organic == true) {
                if (products[i].organic == true) {
                    product_names.push(products[i]);
                }
            }
            else {
                product_names.push(products[i]);
            }
        }
		// none check
		else if (none == true) {
            // if prefer organic
            if (organic == true) {
                // and product is organic
				if(products[i].organic == true){
					product_names.push(products[i]);
				}
            }
            // if no organic preference
			else{
				product_names.push(products[i]);
			}
		}

	}





	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
