/* ═══════════════════════════════════════════════════════════
   LA CHULA CERVECERÍA MEXICANA
   main.js — Vanilla JS, no jQuery
   ═══════════════════════════════════════════════════════════ */

'use strict';


/* ─────────────────────────────────────────
   TRANSLATIONS
───────────────────────────────────────── */
const translations = {
  es: {
    /* Nav */
    'nav-home':         'Inicio',
    'nav-menu-link':    'Menú',
    'nav-about':        'Nosotros',
    'nav-reservations': 'Reservas',
    'nav-contact':      'Contacto',
    /* Hero */
    'hero-eyebrow':  'Cervecería Mexicana · Barcelona',
    'hero-tagline':  'Sabor auténtico,<br>alma barcelonesa',
    'hero-cta':      'Reservar ahora',
    /* About */
    'about-label': 'Nuestra historia',
    'about-title': 'Donde México<br>se encuentra<br>con Barcelona',
    'about-p1':    'En La Chula creemos que la auténtica cocina mexicana merece un espacio propio en el corazón de Barcelona. Nuestros tacos, quesadillas y micheladas se elaboran con ingredientes seleccionados y amor sin filtros.',
    'about-p2':    'El local es un festín para los sentidos: paredes tapizadas de flores, sofás cómodos y un ambiente que fusiona la calidez de la cantina mexicana con la energía moderna del Eixample.',
    'about-cta':   'Ver la carta',
    /* Menu */
    'menu-label':    'La carta',
    'menu-title':    'Nuestras especialidades',
    'menu-subtitle': 'Ingredientes auténticos, recetas con historia',
    /* Dish tags */
    'tag-taco':       'Taco',
    'tag-quesadilla': 'Quesadilla',
    'tag-clasico':    'Clásico',
    'tag-mar':        'Del mar',
    'tag-especial':   'Especial',
    'tag-bebida':     'Bebida',
    /* Dish descriptions */
    'dish-alpastor':  'Cerdo adobado, piña fresca, cilantro y cebolla sobre tortilla de maíz artesanal',
    'dish-carnitas':  'Cerdo confitado a fuego lento, salsa verde, aguacate y crema fresca',
    'dish-pescador':  'Pescado a la plancha, guacamole casero y mayonesa de chipotle',
    'dish-tinga':     'Pollo deshebrado con salsa de chipotle y tomate, queso Oaxaca derretido',
    'dish-nachos':    'Totopos con queso fundido, jalapeños, pico de gallo, crema y guacamole',
    'dish-aguachile': 'Gambas marinadas en chile verde, pepino, cebolla morada y limón',
    'dish-burger':    'Cochinita pibil, cebolla morada encurtida, habanero y pan brioche artesano',
    'dish-michelada': 'Cerveza con clamato, limón, sal, Worcestershire y chile. Refrescante y adictiva',
    /* Reservations */
    'res-label':    'Reservas',
    'res-title':    '¿Tienes hambre?',
    'res-desc':     'Reserva tu mesa llamando directamente. Te esperamos con tortillas recién hechas y micheladas bien frías.',
    'hours-title':  'Horario',
    'hours-monthu': 'Lun — Jue',
    'hours-fri':    'Viernes',
    'hours-sat':    'Sábado',
    'hours-sun':    'Domingo',
    'price-range':  'Precio medio: <strong>€20–30 / persona</strong>',
    /* Gallery */
    'gallery-label': 'Galería',
    'gallery-title': 'La experiencia Chula',
    /* Testimonials */
    'test-label': 'Opiniones',
    'test-title': 'Lo que dicen<br>nuestros clientes',
    'test-1':     '"Los mejores tacos al pastor que he probado fuera de México. La pared de flores es una pasada y la michelada está para repetir. Ya tengo sitio fijo en Barcelona."',
    'test-1-loc': 'Gràcia, Barcelona',
    'test-2':     '"Ambiente genial, muy auténtico. La cochinita burger es un must absoluto. El personal súper amable y el local tiene mucho encanto. Volveré seguro."',
    'test-2-loc': 'Eixample, Barcelona',
    'test-3':     '"Una joya cerca de la Sagrada Família. El aguachile estaba espectacular y los precios son muy razonables para la calidad. Perfecto para venir en grupo."',
    'test-3-loc': 'El Born, Barcelona',
    /* Location */
    'loc-label':        'Encuéntranos',
    'loc-title':        'Ven a visitarnos',
    'loc-neighborhood': 'Eixample (cerca de la Sagrada Família)',
    /* Menu filter tabs */
    'filter-all':            'Todos',
    'filter-tacos':          'Tacos',
    'filter-especialidades': 'Especialidades',
    'filter-quesadillas':    'Quesadillas',
    'filter-ceviches':       'Ceviches',
    'filter-compartimos':    'Compartimos',
    'filter-postres':        'Postres',
    /* Category tags */
    'tag-ceviche':   'Ceviche',
    'tag-compartir': 'Para compartir',
    'tag-postre':    'Postre',
    /* Taco descriptions */
    'dish-t1': 'Cerdo estilo D.F. con piña asada — 3 uds.',
    'dish-t2': 'Cerdo desmechado en hoja de plátano, cebolla morada encurtida — 3 uds.',
    'dish-t3': 'Cerdo confitado con naranja, cebolla, cilantro y guacamole — 3 uds.',
    'dish-t4': 'Pescado frito, mayo chipotle, alubias, lechuga, pico de gallo, guacamole y feta — 3 uds.',
    'dish-t5': 'Camarón, alubias, lechuga, mayo chipotle, pico de gallo y feta — 3 uds.',
    'dish-t6': 'Ternera o pollo estofado al chipotle con cebolla — 3 uds.',
    'dish-t7': 'Ternera, chorizo y guacamole — 3 uds.',
    'dish-t8': 'Pulpo estilo pastor, cilantro, cebolla y piña — 3 uds.',
    /* Quesadilla descriptions */
    'dish-q1': 'Pastor, piña y queso — con queso y patatas fritas',
    'dish-q2': 'Tinga de pollo o ternera — con queso y patatas fritas',
    'dish-q3': 'Cochinita pibil, queso y cebolla encurtida — con patatas fritas',
    'dish-q4': 'Camarón, alubias, aguacate, cebolla pochada y mayo chipotle — con patatas fritas',
    'dish-q5': 'Ternera, cebolla y aguacate — con queso y patatas fritas',
    'dish-q6': 'Queso con ternera, pollo o jamón dulce — con patatas fritas',
    /* Ceviche descriptions */
    'dish-c1': 'Gambas crudas en limón, cilantro, aguacate, pepino, cebolla y chile',
    'dish-c2': 'Corvina, manzana verde, aguacate, cilantro, tomate, limón y curry verde',
    'dish-c3': 'Ceviche de camarón sobre tostada crujiente, aguacate, pepino, cilantro, cebolla roja y tomate',
    'dish-c4': 'Tostada mexicana clásica con ceviche mixto de camarón y pescado',
    /* Compartimos descriptions */
    'dish-s1': 'Guacamole casero con totopos artesanales',
    'dish-s2': 'Totopos, queso fundido, alubias y pico de gallo',
    'dish-s3': 'Queso, alubias, guacamole, pico de gallo, cochinita, pollo/ternera/verduras',
    'dish-s4': 'Tiras de tortilla fritas, salsa casera y huevo tierno',
    'dish-s5': 'Nuestra versión de las patatas bravas',
    /* Especialidades descriptions */
    'dish-e1': 'Tostada de maíz, tinga de pollo o ternera, alubias, crema, feta, pico de gallo y lechuga',
    'dish-e2': 'Salsa roja, verde o mole — con huevo +€1',
    'dish-e3': 'Fajitas clásicas con 4 tortillas — con camarón +€1',
    'dish-e4': 'Burger de cochinita pibil, aguacate, cebolla encurtida y cilantro',
    'dish-e5': 'Costillas de cerdo marinadas en bourbon, toque mexicano y patatas fritas',
    /* Postre descriptions */
    'dish-p1': 'Bizcocho mexicano clásico empapado en tres tipos de leche',
    'dish-p2': 'Tarta de queso con frutos rojos',
    'dish-p3': 'Bizcocho de chocolate con helado',
    /* Reviews */
    'reviews-cta': 'Leer todas las reseñas en Google',
    /* Bebidas */
    'filter-bebidas':    'Bebidas',
    'subhead-cocktails': 'Cocktails',
    'subhead-cervezas':  'Cervezas',
    'subhead-refrescos': 'Refrescos',
    'subhead-aguas':     'Aguas Frescas',
    'subhead-aguas-note':'33cl',
    'subhead-batidos':   'Batidos',
    'tag-cocktail':      'Cóctel',
    'tag-cerveza':       'Cerveza',
    'tag-refresco':      'Refresco',
    'tag-agua-fresca':   'Agua Fresca',
    'tag-batido':        'Batido',
    /* Footer */
    'footer-tagline':       'Auténtica cocina mexicana<br>en el corazón de Barcelona.',
    'footer-nav-title':     'Navegación',
    'footer-contact-title': 'Contacto',
    'footer-copy':          '© 2026 La Chula Cervecería Mexicana · Barcelona. Todos los derechos reservados.',
  },

  en: {
    /* Nav */
    'nav-home':         'Home',
    'nav-menu-link':    'Menu',
    'nav-about':        'About',
    'nav-reservations': 'Reservations',
    'nav-contact':      'Contact',
    /* Hero */
    'hero-eyebrow':  'Mexican Brewery · Barcelona',
    'hero-tagline':  'Authentic flavour,<br>Barcelona soul',
    'hero-cta':      'Book a table',
    /* About */
    'about-label': 'Our story',
    'about-title': 'Where Mexico<br>meets<br>Barcelona',
    'about-p1':    'At La Chula we believe authentic Mexican food deserves its own space in the heart of Barcelona. Our tacos, quesadillas and micheladas are made with carefully sourced ingredients and unfiltered passion.',
    'about-p2':    'The space is a feast for the senses: flower-covered walls, cosy sofas, and an atmosphere blending the warmth of a Mexican cantina with the modern energy of the Eixample.',
    'about-cta':   'See our menu',
    /* Menu */
    'menu-label':    'The menu',
    'menu-title':    'Our specialities',
    'menu-subtitle': 'Authentic ingredients, recipes with history',
    /* Dish tags */
    'tag-taco':       'Taco',
    'tag-quesadilla': 'Quesadilla',
    'tag-clasico':    'Classic',
    'tag-mar':        'From the sea',
    'tag-especial':   'Special',
    'tag-bebida':     'Drink',
    /* Dish descriptions */
    'dish-alpastor':  'Marinated pork, fresh pineapple, coriander and onion on handmade corn tortilla',
    'dish-carnitas':  'Slow-braised pork, salsa verde, avocado and crème fraîche',
    'dish-pescador':  'Grilled fish, homemade guacamole and chipotle mayonnaise',
    'dish-tinga':     'Shredded chicken in chipotle and tomato sauce, melted Oaxaca cheese',
    'dish-nachos':    'Tortilla chips with melted cheese, jalapeños, pico de gallo, crème fraîche and guacamole',
    'dish-aguachile': 'Prawns marinated in green chilli, cucumber, red onion and lime',
    'dish-burger':    'Cochinita pibil, pickled red onion, habanero and artisan brioche bun',
    'dish-michelada': 'Beer with clamato, lime, salt, Worcestershire and chilli. Refreshing and addictive',
    /* Reservations */
    'res-label':    'Reservations',
    'res-title':    'Ready to eat?',
    'res-desc':     'Book your table by calling us directly. We\'ll be waiting with freshly made tortillas and ice-cold micheladas.',
    'hours-title':  'Opening hours',
    'hours-monthu': 'Mon — Thu',
    'hours-fri':    'Friday',
    'hours-sat':    'Saturday',
    'hours-sun':    'Sunday',
    'price-range':  'Average spend: <strong>€20–30 / person</strong>',
    /* Gallery */
    'gallery-label': 'Gallery',
    'gallery-title': 'The Chula experience',
    /* Testimonials */
    'test-label': 'Reviews',
    'test-title': 'What our<br>customers say',
    'test-1':     '"The best tacos al pastor I\'ve had outside Mexico. The flower wall is stunning and the michelada is a must. Found my go-to spot in Barcelona."',
    'test-1-loc': 'Gràcia, Barcelona',
    'test-2':     '"Great vibe, very authentic. The cochinita burger is an absolute must. Super friendly staff and the place has loads of charm. I\'ll definitely be back."',
    'test-2-loc': 'Eixample, Barcelona',
    'test-3':     '"A gem near the Sagrada Família. The aguachile was spectacular and prices are very reasonable for the quality. Perfect for groups."',
    'test-3-loc': 'El Born, Barcelona',
    /* Location */
    'loc-label':        'Find us',
    'loc-title':        'Come visit us',
    'loc-neighborhood': 'Eixample (near Sagrada Família)',
    /* Menu filter tabs */
    'filter-all':            'All',
    'filter-tacos':          'Tacos',
    'filter-especialidades': 'Specialities',
    'filter-quesadillas':    'Quesadillas',
    'filter-ceviches':       'Ceviches',
    'filter-compartimos':    'To Share',
    'filter-postres':        'Desserts',
    /* Category tags */
    'tag-ceviche':   'Ceviche',
    'tag-compartir': 'To share',
    'tag-postre':    'Dessert',
    /* Taco descriptions */
    'dish-t1': 'Classic Mexico City pork with roasted pineapple — 3 pcs.',
    'dish-t2': 'Pulled pork in banana leaf, pickled red onion — 3 pcs.',
    'dish-t3': 'Pork braised with orange, onion, coriander and guacamole — 3 pcs.',
    'dish-t4': 'Fried fish, chipotle mayo, beans, lettuce, pico de gallo, guacamole and feta — 3 pcs.',
    'dish-t5': 'Shrimp, beans, lettuce, chipotle mayo, pico de gallo and feta — 3 pcs.',
    'dish-t6': 'Stewed beef or chicken, chipotle, onion — 3 pcs.',
    'dish-t7': 'Beef, chorizo and guacamole — 3 pcs.',
    'dish-t8': 'Pastor style octopus, coriander, onion and pineapple — 3 pcs.',
    /* Quesadilla descriptions */
    'dish-q1': 'Pastor, pineapple and cheese — with cheese and french fries',
    'dish-q2': 'Stewed chicken or beef tinga — with cheese and french fries',
    'dish-q3': 'Cochinita pibil, cheese and pickled onion — with french fries',
    'dish-q4': 'Shrimp, beans, avocado, cooked onion and chipotle mayo — with french fries',
    'dish-q5': 'Beef, onion and avocado — with cheese and french fries',
    'dish-q6': 'Cheese with beef, chicken or sweet ham — with french fries',
    /* Ceviche descriptions */
    'dish-c1': 'Raw prawns in lime juice, coriander, avocado, cucumber, onion and chilli',
    'dish-c2': 'White sea bass, green apple, avocado, coriander, tomato, lime and green curry',
    'dish-c3': 'Shrimp ceviche on crispy tostada, avocado, cucumber, coriander, red onion and tomato',
    'dish-c4': 'Classic Mexican tostada with mixed shrimp and fish ceviche',
    /* Compartimos descriptions */
    'dish-s1': 'Homemade guacamole with artisan totopos',
    'dish-s2': 'Classic nachos, cheese, beans and pico de gallo',
    'dish-s3': 'Cheese, beans, guacamole, pico de gallo, cochinita, chicken/beef/vegetables',
    'dish-s4': 'Fried tortilla strips, homemade sauce and tender egg',
    'dish-s5': 'Our version of patatas bravas',
    /* Especialidades descriptions */
    'dish-e1': 'Corn tostada, chicken or beef tinga, beans, sour cream, feta, pico de gallo and lettuce',
    'dish-e2': 'Red, green or mole salsa — with egg +€1',
    'dish-e3': 'Classic fajitas with 4 tortillas — with shrimp +€1',
    'dish-e4': 'Cochinita pibil burger, avocado, pickled onion and coriander',
    'dish-e5': 'Pork ribs marinated in bourbon, Mexican touch and french fries',
    /* Postre descriptions */
    'dish-p1': 'Classic Mexican sponge cake soaked in three types of milk',
    'dish-p2': 'Cheesecake with red fruits',
    'dish-p3': 'Chocolate cake with ice cream',
    /* Reviews */
    'reviews-cta': 'Read all reviews on Google',
    /* Bebidas */
    'filter-bebidas':    'Drinks',
    'subhead-cocktails': 'Cocktails',
    'subhead-cervezas':  'Beers',
    'subhead-refrescos': 'Soft Drinks',
    'subhead-aguas':     'Fresh Waters',
    'subhead-aguas-note':'33cl',
    'subhead-batidos':   'Milkshakes',
    'tag-cocktail':      'Cocktail',
    'tag-cerveza':       'Beer',
    'tag-refresco':      'Soft Drink',
    'tag-agua-fresca':   'Fresh Water',
    'tag-batido':        'Milkshake',
    /* Footer */
    'footer-tagline':       'Authentic Mexican food<br>in the heart of Barcelona.',
    'footer-nav-title':     'Navigation',
    'footer-contact-title': 'Contact',
    'footer-copy':          '© 2026 La Chula Cervecería Mexicana · Barcelona. All rights reserved.',
  },

  ca: {
    /* Nav */
    'nav-home':         'Inici',
    'nav-menu-link':    'Carta',
    'nav-about':        'Nosaltres',
    'nav-reservations': 'Reserves',
    'nav-contact':      'Contacte',
    /* Hero */
    'hero-eyebrow':  'Cerveseria Mexicana · Barcelona',
    'hero-tagline':  'Sabor autèntic,<br>ànima barcelonina',
    'hero-cta':      'Reservar ara',
    /* About */
    'about-label': 'La nostra història',
    'about-title': 'On Mèxic<br>es troba<br>amb Barcelona',
    'about-p1':    'A La Chula creiem que la cuina mexicana autèntica mereix un espai propi al cor de Barcelona. Els nostres tacos, quesadillas i micheladas es preparen amb ingredients seleccionats i passió sense filtres.',
    'about-p2':    'El local és una festa per als sentits: parets cobertes de flors, sofàs còmodes i un ambient que fusiona la calidesa de la cantina mexicana amb l\'energia moderna de l\'Eixample.',
    'about-cta':   'Veure la carta',
    /* Menu */
    'menu-label':    'La carta',
    'menu-title':    'Les nostres especialitats',
    'menu-subtitle': 'Ingredients autèntics, receptes amb història',
    /* Dish tags */
    'tag-taco':       'Taco',
    'tag-quesadilla': 'Quesadilla',
    'tag-clasico':    'Clàssic',
    'tag-mar':        'De la mar',
    'tag-especial':   'Especial',
    'tag-bebida':     'Beguda',
    /* Dish descriptions */
    'dish-alpastor':  'Porc adobat, pinya fresca, coriandre i ceba sobre truita de blat de moro artesanal',
    'dish-carnitas':  'Porc confitat a foc lent, salsa verda, alvocat i crema fresca',
    'dish-pescador':  'Peix a la planxa, guacamole casolà i maionesa de chipotle',
    'dish-tinga':     'Pollastre esfilagarssat amb salsa de chipotle i tomàquet, formatge Oaxaca fos',
    'dish-nachos':    'Totopos amb formatge fos, jalapeños, pico de gallo, crema i guacamole',
    'dish-aguachile': 'Gambetes marinades en xili verd, cogombre, ceba morada i llimona',
    'dish-burger':    'Cochinita pibil, ceba morada encurtida, habanero i pa brioche artesà',
    'dish-michelada': 'Cervesa amb clamato, llimona, sal, Worcestershire i xili. Refrescant i addictiva',
    /* Reservations */
    'res-label':    'Reserves',
    'res-title':    'Tens gana?',
    'res-desc':     'Reserva la teva taula trucant directament. T\'esperem amb truites recents i micheladas ben fredes.',
    'hours-title':  'Horari',
    'hours-monthu': 'Dl — Dj',
    'hours-fri':    'Divendres',
    'hours-sat':    'Dissabte',
    'hours-sun':    'Diumenge',
    'price-range':  'Preu mitjà: <strong>€20–30 / persona</strong>',
    /* Gallery */
    'gallery-label': 'Galeria',
    'gallery-title': 'L\'experiència Chula',
    /* Testimonials */
    'test-label': 'Opinions',
    'test-title': 'Què diuen<br>els nostres clients',
    'test-1':     '"Els millors tacos al pastor que he provat fora de Mèxic. La paret de flors és impressionant i la michelada és per repetir. Ja tinc lloc fix a Barcelona."',
    'test-1-loc': 'Gràcia, Barcelona',
    'test-2':     '"Ambient genial, molt autèntic. La cochinita burger és un must absolut. El personal molt amable i el local té molt d\'encant. Hi tornaré segur."',
    'test-2-loc': 'Eixample, Barcelona',
    'test-3':     '"Una joia prop de la Sagrada Família. L\'aguachile estava espectacular i els preus són molt raonables per la qualitat. Perfecte per venir en grup."',
    'test-3-loc': 'El Born, Barcelona',
    /* Location */
    'loc-label':        'Troba\'ns',
    'loc-title':        'Vine a visitar-nos',
    'loc-neighborhood': 'Eixample (prop de la Sagrada Família)',
    /* Menu filter tabs */
    'filter-all':            'Tots',
    'filter-tacos':          'Tacos',
    'filter-especialidades': 'Especialitats',
    'filter-quesadillas':    'Quesadillas',
    'filter-ceviches':       'Ceviches',
    'filter-compartimos':    'Compartim',
    'filter-postres':        'Postres',
    /* Category tags */
    'tag-ceviche':   'Ceviche',
    'tag-compartir': 'Per compartir',
    'tag-postre':    'Postres',
    /* Taco descriptions */
    'dish-t1': 'Porc estil D.F. amb pinya torrada — 3 uds.',
    'dish-t2': 'Porc desmullat en fulla de plàtan, ceba morada encurtida — 3 uds.',
    'dish-t3': 'Porc confitat amb taronja, ceba, coriandre i guacamole — 3 uds.',
    'dish-t4': 'Peix fregit, mayo chipotle, mongetes, enciam, pico de gallo, guacamole i feta — 3 uds.',
    'dish-t5': 'Gamba, mongetes, enciam, mayo chipotle, pico de gallo i feta — 3 uds.',
    'dish-t6': 'Vedella o pollastre estofat al chipotle amb ceba — 3 uds.',
    'dish-t7': 'Vedella, xoriço i guacamole — 3 uds.',
    'dish-t8': 'Pop estil pastor, coriandre, ceba i pinya — 3 uds.',
    /* Quesadilla descriptions */
    'dish-q1': 'Pastor, pinya i formatge — amb formatge i patates fregides',
    'dish-q2': 'Tinga de pollastre o vedella — amb formatge i patates fregides',
    'dish-q3': 'Cochinita pibil, formatge i ceba encurtida — amb patates fregides',
    'dish-q4': 'Gamba, mongetes, alvocat, ceba cuita i mayo chipotle — amb patates fregides',
    'dish-q5': 'Vedella, ceba i alvocat — amb formatge i patates fregides',
    'dish-q6': 'Formatge amb vedella, pollastre o pernil dolç — amb patates fregides',
    /* Ceviche descriptions */
    'dish-c1': 'Gambes crues en llimona, coriandre, alvocat, cogombre, ceba i xili',
    'dish-c2': 'Corbina, poma verda, alvocat, coriandre, tomàquet, llimona i curry verd',
    'dish-c3': 'Ceviche de gamba sobre tostada cruixent, alvocat, cogombre, coriandre, ceba roja i tomàquet',
    'dish-c4': 'Tostada mexicana clàssica amb ceviche mixt de gamba i peix',
    /* Compartimos descriptions */
    'dish-s1': 'Guacamole casolà amb totopos artesans',
    'dish-s2': 'Totopos, formatge fos, mongetes i pico de gallo',
    'dish-s3': 'Formatge, mongetes, guacamole, pico de gallo, cochinita, pollastre/vedella/verdures',
    'dish-s4': 'Tires de tortilla fregides, salsa casolana i ou tendre',
    'dish-s5': 'La nostra versió de les patates braves',
    /* Especialidades descriptions */
    'dish-e1': 'Tostada de blat de moro, tinga de pollastre o vedella, mongetes, crema, feta, pico de gallo i enciam',
    'dish-e2': 'Salsa vermella, verda o mole — amb ou +€1',
    'dish-e3': 'Fajitas clàssiques amb 4 tortilles — amb gamba +€1',
    'dish-e4': 'Burger de cochinita pibil, alvocat, ceba encurtida i coriandre',
    'dish-e5': 'Costelles de porc marinades en bourbon, toc mexicà i patates fregides',
    /* Postre descriptions */
    'dish-p1': 'Bescuit mexicà clàssic remullat en tres tipus de llet',
    'dish-p2': 'Pastís de formatge amb fruits vermells',
    'dish-p3': 'Bescuit de xocolata amb gelat',
    /* Reviews */
    'reviews-cta': 'Llegir totes les ressenyes a Google',
    /* Bebidas */
    'filter-bebidas':    'Begudes',
    'subhead-cocktails': 'Cocktails',
    'subhead-cervezas':  'Cerveses',
    'subhead-refrescos': 'Refrescos',
    'subhead-aguas':     'Aigues Fresques',
    'subhead-aguas-note':'33cl',
    'subhead-batidos':   'Batuts',
    'tag-cocktail':      'Còctel',
    'tag-cerveza':       'Cervesa',
    'tag-refresco':      'Refresc',
    'tag-agua-fresca':   'Aigua Fresca',
    'tag-batido':        'Batut',
    /* Footer */
    'footer-tagline':       'Cuina mexicana autèntica<br>al cor de Barcelona.',
    'footer-nav-title':     'Navegació',
    'footer-contact-title': 'Contacte',
    'footer-copy':          '© 2026 La Chula Cervecería Mexicana · Barcelona. Tots els drets reservats.',
  },
};


/* ─────────────────────────────────────────
   LANGUAGE SWITCHER
───────────────────────────────────────── */
let currentLang = 'es';

function applyLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;

  const dict = translations[lang];

  // Update all translatable text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Update html lang attribute
  document.documentElement.lang = lang === 'ca' ? 'ca' : lang === 'en' ? 'en' : 'es';

  // Update active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  // Persist choice
  try { localStorage.setItem('lachula-lang', lang); } catch (_) {}
}

// Bind lang buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

// Restore saved language (or default ES)
(function () {
  let saved = 'es';
  try { saved = localStorage.getItem('lachula-lang') || 'es'; } catch (_) {}
  if (saved !== 'es') applyLanguage(saved);
})();


/* ─────────────────────────────────────────
   HAMBURGER MENU
───────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');

function openMenu() {
  hamburger.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  hamburger.setAttribute('aria-label', 'Cerrar menú de navegación');
  navMenu.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.setAttribute('aria-label', 'Abrir menú de navegación');
  navMenu.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  const isOpen = navMenu.classList.contains('open');
  isOpen ? closeMenu() : openMenu();
});

// Close on nav link click
navMenu.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && navMenu.classList.contains('open')) {
    closeMenu();
    hamburger.focus();
  }
});

// Close on outside click
document.addEventListener('click', e => {
  if (
    navMenu.classList.contains('open') &&
    !navMenu.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    closeMenu();
  }
});


/* ─────────────────────────────────────────
   STICKY HEADER (scroll effect)
───────────────────────────────────────── */
const siteHeader = document.getElementById('site-header');

function handleScroll() {
  if (window.scrollY > 40) {
    siteHeader.classList.add('scrolled');
  } else {
    siteHeader.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll(); // run once on load


/* ─────────────────────────────────────────
   INTERSECTION OBSERVER — FADE-IN ANIMATIONS
───────────────────────────────────────── */
const fadeElements = document.querySelectorAll('.fade-in');

if (fadeElements.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // animate once only
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px',
    }
  );

  fadeElements.forEach(el => observer.observe(el));
} else {
  // Fallback: show all immediately if IntersectionObserver not supported
  fadeElements.forEach(el => el.classList.add('visible'));
}


/* ─────────────────────────────────────────
   MENU CATEGORY FILTER
───────────────────────────────────────── */
const filterBtns = document.querySelectorAll('.filter-btn');
const dishCards  = document.querySelectorAll('[data-category]');

function applyFilter(filter) {
  let visibleIndex = 0;
  dishCards.forEach(card => {
    const match = filter === 'all' || card.dataset.category === filter;
    if (match) {
      card.classList.remove('hidden', 'revealing');
      // Stagger reveal — small offset per card so they cascade in
      const delay = visibleIndex * 40;
      card.style.animationDelay = delay + 'ms';
      // Force reflow then add class so animation fires even on re-show
      void card.offsetWidth;
      card.classList.add('revealing', 'visible');
      visibleIndex++;
    } else {
      card.classList.add('hidden');
      card.classList.remove('revealing');
      card.style.animationDelay = '';
    }
  });
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    applyFilter(btn.dataset.filter);
  });
});

// Apply default filter (tacos) on page load
applyFilter('tacos');


/* ─────────────────────────────────────────
   SMOOTH SCROLL FOR ANCHOR LINKS
───────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();

    const navHeight = siteHeader.offsetHeight;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight;

    window.scrollTo({ top: targetTop, behavior: 'smooth' });
  });
});


/* ─────────────────────────────────────────
   GALLERY LIGHTBOX
───────────────────────────────────────── */
(function () {
  const lightbox   = document.getElementById('lightbox');
  const lbImg      = document.getElementById('lightbox-img');
  const lbClose    = document.getElementById('lightbox-close');
  const lbPrev     = document.getElementById('lightbox-prev');
  const lbNext     = document.getElementById('lightbox-next');
  const lbBackdrop = document.getElementById('lightbox-backdrop');

  // Build a deduplicated image list keyed by data-index.
  // Duplicate strip items share the same index — we collect each index once.
  const galleryImages = [];
  document.querySelectorAll('.gallery-item[data-index]').forEach(item => {
    const idx = parseInt(item.dataset.index, 10);
    if (!galleryImages[idx]) {
      const img = item.querySelector('img');
      galleryImages[idx] = { src: img.src, alt: img.alt };
    }
  });
  const total = galleryImages.length;

  let currentIndex = 0;

  function showImage(index) {
    lbImg.src = galleryImages[index].src;
    lbImg.alt = galleryImages[index].alt;
    currentIndex = index;
  }

  function openLightbox(index) {
    showImage(index);
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lbImg.src = '';
    document.body.style.overflow = '';
  }

  // Bind every gallery-item (including duplicates) — use data-index for correct target
  document.querySelectorAll('.gallery-item').forEach(item => {
    const idx = parseInt(item.dataset.index, 10);
    item.addEventListener('click', () => openLightbox(idx));
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(idx); }
    });
  });

  lbPrev.addEventListener('click', () => showImage((currentIndex - 1 + total) % total));
  lbNext.addEventListener('click', () => showImage((currentIndex + 1) % total));
  lbClose.addEventListener('click', closeLightbox);
  lbBackdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', e => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  showImage((currentIndex - 1 + total) % total);
    if (e.key === 'ArrowRight') showImage((currentIndex + 1) % total);
  });
}());
