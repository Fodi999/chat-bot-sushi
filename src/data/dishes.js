const categories = [
    {
      title: "Нигири",
      dishes: [
        { id: 1, name: "Суши с лососем", description: "Свежий лосось, рис, нори", price: "12.99₽", image: "/000010.jpg" },
        { id: 2, name: "Суши с тунцом", description: "Свежий тунец, рис, нори", price: "13.99₽", image: "/000011.jpg" },
        { id: 3, name: "Суши с креветкой", description: "Креветка, рис, нори", price: "14.99₽", image: "/000012.jpg" },
        { id: 4, name: "Суши с угрём", description: "Угорь, рис, нори", price: "15.99₽", image: "/000013.jpg" },
        { id: 5, name: "Суши с икрой", description: "Икра лосося, рис, нори", price: "16.99₽", image: "/000014.jpg" },
        { id: 6, name: "Суши с крабом", description: "Мясо краба, рис, нори", price: "17.99₽", image: "/000015.jpg" },
        { id: 7, name: "Суши с мидиями", description: "Мидии, рис, нори", price: "18.99₽", image: "/000016.jpg" },
      ],
    },
    {
      title: "Суши",
      dishes: [
        { id: 8, name: "Ролл Калифорния", description: "Крабовые палочки, авокадо, огурец", price: "15.99₽", image: "/000017.jpg" },
        { id: 9, name: "Ролл Филадельфия", description: "Лосось, сливочный сыр, авокадо", price: "17.99₽", image: "/000018.jpg" },
        { id: 10, name: "Ролл Дракон", description: "Угорь, авокадо, рис, нори", price: "18.99₽", image: "/000019.jpg" },
        { id: 11, name: "Ролл Тигр", description: "Тигровая креветка, сливочный сыр, рис", price: "19.99₽", image: "000010.jpg" },
        { id: 12, name: "Ролл Спайси", description: "Острый лосось, рис, нори", price: "14.99₽", image: "000011.jpg" },
        { id: 13, name: "Ролл Унаги", description: "Угорь, огурец, соус унаги", price: "16.99₽", image: "000012.jpg" },
        { id: 14, name: "Ролл Веган", description: "Авокадо, огурец, рис", price: "12.99₽", image: "000013.jpg" },
      ],
    },
    {
      title: "Сеты",
      dishes: [
        { id: 15, name: "Сет Ассорти", description: "Роллы, суши, нигири", price: "55.99₽", image: "/000019.jpg" },
        { id: 16, name: "Сет Семейный", description: "Роллы и суши для всей семьи", price: "60.99₽", image: "/000010.jpg" },
        { id: 17, name: "Сет Веган", description: "Овощные роллы и суши", price: "50.99₽", image: "/000011.jpg" },
        { id: 18, name: "Сет Лосось", description: "Роллы и суши с лососем", price: "65.99₽", image: "/000012.jpg" },
        { id: 19, name: "Сет Тунец", description: "Роллы и суши с тунцом", price: "58.99₽", image: "/000013.jpg" },
        { id: 20, name: "Сет Дракон", description: "Роллы с угрём", price: "75.99₽", image: "/000014.jpg" },
        { id: 21, name: "Сет Микс", description: "Смешанные суши и роллы", price: "70.99₽", image: "/000015.jpg" },
      ],
    },
    {
      title: "Закуски",
      dishes: [
        { id: 22, name: "Эдамаме", description: "Зелёные соевые бобы", price: "7.99₽", image: "/000011.jpg" },
        { id: 23, name: "Гёдза", description: "Обжаренные японские пельмени", price: "9.99₽", image: "/000012.jpg" },
        { id: 24, name: "Карааге", description: "Хрустящая курочка в соусе", price: "10.99₽", image: "/000013.jpg" },
        { id: 25, name: "Тяхан", description: "Жареный рис с овощами", price: "8.99₽", image: "/000014.jpg" },
        { id: 26, name: "Тофу в темпуре", description: "Обжаренный тофу", price: "11.99₽", image: "/000015.jpg" },
        { id: 27, name: "Креветки темпура", description: "Хрустящие креветки", price: "15.99₽", image: "/000016.jpg" },
        { id: 28, name: "Мидии в соусе", description: "Мидии под сливочным соусом", price: "18.99₽", image: "/000017.jpg" },
      ],
    },
    {
      title: "Салаты",
      dishes: [
        { id: 29, name: "Салат Чука", description: "Морские водоросли с соусом", price: "9.99₽", image: "/000012.jpg" },
        { id: 30, name: "Салат с курицей", description: "Куриное мясо, овощи, соус", price: "11.99₽", image: "/000013.jpg" },
        { id: 31, name: "Салат Цезарь", description: "Куриное мясо, сыр, сухарики", price: "13.99₽", image: "/000014.jpg" },
        { id: 32, name: "Салат с креветками", description: "Креветки, овощи, соус", price: "14.99₽", image: "/000015.jpg" },
        { id: 33, name: "Салат из тунца", description: "Тунец, овощи, соус", price: "12.99₽", image: "/000016.jpg" },
        { id: 34, name: "Салат с авокадо", description: "Авокадо, овощи, соус", price: "10.99₽", image: "/000017.jpg" },
        { id: 35, name: "Салат Веган", description: "Овощи, водоросли, соус", price: "8.99₽", image: "/000018.jpg" },
      ],
    },
  ];
  
  export default categories;
  
  