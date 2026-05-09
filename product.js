const allProducts = [
    {
        id: 0,
        img: "img/product/2.webp", 
        name: "Trendy Chocolate Cutout Sweater", 
        price: 600,
        desc: "This stylish cutout sweater in a rich chocolate brown features elegant balloon sleeves and a soft knit texture."
    },
    {
        id: 1,
        img: "img/product/1.webp", 
        name: "Modern Two-Piece Grey Set",
        price: 450,
        old_price: 1000,
        desc: "A sophisticated two-piece set featuring a unique split-tone design with a classic grey side and a modern floral pattern."
    },
    {
        id: 2,
        img: "img/product/3.webp",
        name: "Elegant Satin Evening Dress",
        price: 800,
       old_price: 2100,
        desc: "A luxurious orange satin gown with a sophisticated pleated bodice and a flowing high-low hemline."
    },
    {
        id: 3, 
        img: "img/product/6.webp",
        name: "Chic Winter Streetwear Look",
        price: 1200,
        old_price: 2700,
        desc: "A complete premium winter ensemble including a long burgundy coat, sleek black top, and dark trousers."
    },
       {id: 4, 
        img: "img/product/4.webp",
        name: "Chic Winter Streetwear Look",
        price: 1500,
        old_price: 2700,
        desc: "A complete premium winter ensemble including a long burgundy coat, sleek black top, and dark trousers."
    },
    {id: 5, 
        img: "img/product/8.webp",
        name: "Chic Winter Streetwear Look",
        price: 1000,
        old_price: 2100,
        desc: "A complete premium winter ensemble including a long burgundy coat, sleek black top, and dark trousers."
    },
    {id: 6, 
        img: "img/product/9.webp",
        name: "Chic Winter Streetwear Look",
        price: 1000,
       old_price: 2700,
        desc: "A complete premium winter ensemble including a long burgundy coat, sleek black top, and dark trousers."
    },
     {id: 7, 
        img: "img/product/5.webp",
        name: "Chic Winter Streetwear Look",
        price: 900,
     old_price: 1700,
        desc: "A complete premium winter ensemble including a long burgundy coat, sleek black top, and dark trousers."
    },
      {id: 8, 
        img: "img/product/1111.webp",
        name: "Chic Winter Streetwear Look",
        price: 700,
        old_price: 1500,
        desc: "A complete premium winter ensemble including a long burgundy coat, sleek black top, and dark trousers."
    },
{
    id: 9,
    img: "img/product/1.webp",
    name: "Vintage Pearl Flare Coat",
    price: 1850,
    old_price: 2700,
    desc: "A timeless grey masterpiece featuring a sophisticated flared hem and double-breasted elegance."
},
{
    id: 10,
    img: "img/product/13.webp",
    name: "Royal Velvet Azure Coat",
    price: 2100,
    old_price: 4700,
    desc: "Stand out in this luxurious deep blue coat, designed with a cinched waist for a regal silhouette."
},
{
    id: 11,
    img: "img/product/14.webp",
    name: "Midnight Grace Longline",
    price: 2500,
    old_price: 3700,
    desc: "An elegant, full-length overcoat in midnight black, offering supreme warmth and a sleek, slim fit."
},
{
    id: 12,
    img: "img/product/15.webp",
    name: "Lime Sorbet Statement Wrap",
    price: 1950,
    desc: "A bold, modern take on winter wear with a vibrant lime hue and a chic belted waist."
},
{
    id: 13,
    img: "img/product/16.webp",
    name: "Lime Sorbet Statement Wrap",
    price: 1550,
    desc: "A bold, modern take on winter wear with a vibrant lime hue and a chic belted waist."
},
{
    id: 14,
    img: "img/product/17.webp",
    name: "Lime Sorbet Statement Wrap",
    price: 1050,
    desc: "A bold, modern take on winter wear with a vibrant lime hue and a chic belted waist."
},
{
    id: 15,
    img: "img/product/18.webp",
    name: "Lime Sorbet Statement Wrap",
    price: 1000,
    desc: "A bold, modern take on winter wear with a vibrant lime hue and a chic belted waist."
},
{
    id: 16,
    img: "img/product/19.webp",
    name: "Lime Sorbet Statement Wrap",
    price: 1400,
    desc: "A bold, modern take on winter wear with a vibrant lime hue and a chic belted waist."
},
{
    id: 17,
    img: "img/product/20.webp",
    name: "Lime Sorbet Statement Wrap",
    price: 1900,
    desc: "A bold, modern take on winter wear with a vibrant lime hue and a chic belted waist."
},
 {
    id: 18,
    img: "img/product/21.webp",
    name: "Vintage Lace Platform",
    price: 780,
    desc: "A classic lace-patterned high heel featuring a platform sole for a blend of vintage charm and modern comfort."
},
 {
    id: 19,
    img: "img/product/22.webp",
    name: "Midnight Crystal Bootie",
    price: 1200,
    desc: "Sleek black ankle boots accented with a brilliant crystal strap, designed for high-end evening statements."
},
 {
    id: 20,
    img: "img/product/23.webp",
    name: "Floral Velvet Pump",
    price: 680,
     old_price: 1100,
    desc: "Elegant velvet pumps featuring a rich floral print and a side rosette for a touch of feminine sophistication."
},
   { id: 21,
    img: "img/product/24.webp",
    name: "Blush Satin Bow",
    price: 850,
    old_price: 1000,
    desc: "Nude-toned satin heels finished with a dramatic, jewel-encrusted bow—perfect for refined daytime elegance."
},
   { id: 22,
    img: "img/product/25.webp",
    name: "Elegance Lace Stiletto",
    price: 750,
    desc: "A classic lace-patterned high heel featuring a platform sole for a blend of vintage charm and modern comfort."
},
   { id: 23,
    img: "img/product/26.webp",
    name: "Lime Sorbet Statement Wrap",
    price: 950,
    old_price: 1500,
    desc: "Exquisite white lace stilettos with a pointed toe, offering a delicate and ethereal aesthetic for formal events."
},
   { id: 24,
    img: "img/product/27.webp",
    name: "Pearl Blossom Pump",
    price: 1100,
    desc: "A masterpiece of design covered in intricate white 3D floral petals and pearls for a truly royal impressi"
},
   { id: 25,
    img: "img/product/28.webp",
    name: "Golden Zipper Suede",
    price: 890,
    old_price: 1700,
    desc: "Modern suede booties highlighted by a spiraling gold zipper detail, merging edgy street style with luxury."
},
   { id: 26,
    img: "img/product/29.webp",
    name: "Combat Glamour Boot",
    price: 920,
    desc: "High-heeled lace-up boots that combine a rugged combat silhouette with a sleek, polished finish."
},
  /*t-shirt */
 {
    id: 27,
    category: "tshirt",
    img: "img/product/30.webp",
    name: "Pearl Cascade Stiletto",
    price: 850,
    desc: "Elegant white pointed-toe heels featuring intricate silver embroidery and a luxurious pearl-beaded ankle strap with crystal drops."
},
{
  
    id: 28,
        category: "tshirt",
    img: "img/product/31.webp",
    name: "Crystal Blossom Pump",
    price: 780,
    old_price: 900,
    desc: "Sophisticated white bridal pumps adorned with shimmering floral crystal embellishments and a delicate pearl ankle chain."
},
{
    id: 29,
  category: "tshirt",
    img: "img/product/32.webp",
    name: "Sleek Gold-Trim Bootie",
    price: 910,
   old_price: 1200,
    desc: "Modern black stiletto ankle boots featuring a sharp silhouette and a decorative diagonal gold zipper detail for a touch of luxury."
},
{
    id: 30,
    category: "tshirt",
    img: "img/product/33.webp",
    name: "Combat Glamour Boot",
    price: 920,
    desc: "High-heeled lace-up boots that combine a rugged combat silhouette with a sleek, polished finish."
},
{
    id: 31,
    category: "tshirt",
    img: "img/product/34.webp",
    name: "Best Sister Graphic Tee",
    price: 350,
    desc: "Sweet lavender long-sleeve top featuring 'Best Sister Ever' gold lettering and decorative bows at the hem."
},
{
    id: 32,
    category: "tshirt",
    img: "img/product/35.webp",
    name: "Pink Bow Glitter Top",
    price: 320,
    desc: "Long-sleeve pink tee with a large artistic bow graphic and sparkling glitter accents for a playful look."
},
{
    id: 33,
    category: "tshirt",
    img: "img/product/36.webp",
    name: "Starry Night Lavender Tee",
    price: 340,
    desc: "Soft purple top decorated with a metallic gold star pattern and a stylish front-tie knot detail."
},
{
    id: 34,
    category: "tshirt",
    img: "img/product/37.webp",
    name: "Mythical Unicorn Black Tee",
    price: 300,
    old_price:750,
    desc: "Classic black long-sleeve t-shirt featuring a vibrant colorful unicorn print on the center."
},
{
    id: 35,
    category: "tshirt",
    img: "img/product/38.webp",
    name: "Ruffle Shoulder Grey Tee",
    price: 280,
    desc: "Casual grey long-sleeve top with feminine ruffle details on the shoulders and a minimalist unicorn face print."
},
{
    id: 36,
    category: "tshirt",
    img: "img/product/39.webp",
    name: "Crimson Unicorn Spirit Tee",
    price: 510,
    old_price: 900,
    desc: "Deep red cotton tee featuring a large white unicorn graphic, perfect for a bold and magical style."
},
{
    id: 37,
    category: "tshirt",
    img: "img/product/40.webp",
    name: "Daisy Sleeve Crop Sweater",
    price: 450,
    desc: "Trendy red cropped sweatshirt featuring white daisy floral prints along the sleeves for a fresh spring vibe."
},

];
