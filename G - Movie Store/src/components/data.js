const tabList = [
    {tabId : 'ACTION'},
    {tabId : 'ADVENTURE'},
    {tabId : 'SCI-FI'},
    {tabId : 'DRAMA'},
]



const Movies = [
    {
        id: 1,
        imgUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:q-80/et00302402-dzqhuytewt-portrait.jpg',
        category: 'ACTION'
    },
    {
        id: 2,
        imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/p_artemisfowl_19732_ece7d5ad.jpeg?region=0%2C0%2C540%2C810',
        category: 'ACTION'
    },
    {
        id: 3,
        imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/image_e460281e.jpeg?region=0,0,540,810&width=480',
        category: 'ACTION'
    },
    {
        id: 4,
        imgUrl: 'https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-1z5145156/portrait/1920x770788835a0ffcf415c8077ebaf0ef19837.jpg',
        category: 'ACTION'
    },
    {
        id: 5,
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4qt5JAXLX9q64Fh7o28QoUhtiBXizvZjHq4V0dbihu5dU9KZzif1QrI8WhOL9wMhCIBA&usqp=CAU',
        category: 'ACTION'
    },
    {
        id: 6,
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj7HVmGsUChhq-voYuJKZW2cUXPPXO8jZcOWDoGjklOaJtQh26vIaVi1q9Rk0x62mCvck&usqp=CAU',
        category: 'ACTION'
    },
    {
        id: 7,
        imgUrl: 'https://cfm.yidio.com/images/movie/54161/poster-193x290.jpg',
        category: 'ACTION'
    },
    {
        id: 8,
        imgUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:q-80/et00094579-uxstylgjvq-portrait.jpg',
        category: 'ACTION'
    },
    {
        id: 9,
        imgUrl: 'https://qph.cf2.quoracdn.net/main-qimg-96649a9649f46729e5699c3036bd1626-lq',
        category: 'DRAMA'
    },
    {
        id: 10,
        imgUrl: 'https://netstorage-tuko.akamaized.net/images/072e08d88fc26288.jpg',
        category: 'DRAMA'
    },
    {
        id: 11,
        imgUrl: 'https://qqcdnpictest.mxplay.com/pic/ef5204a8c89822198f8a57bfa94ab6c7/en/2x3/320x480/test_pic1595510802761.webp',
        category: 'DRAMA'
    },
    {
        id: 12,
        imgUrl: 'https://i.pinimg.com/236x/12/96/a2/1296a2b96047a6d3aabfd7ed0bec6dd6--movies-to-watch-good-movies.jpg',
        category: 'DRAMA'
    },
    {
        id: 13,
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/LizQueen%2C_Just_the_Way_You_Are%2C_Official_Movie_Poster.jpg/220px-LizQueen%2C_Just_the_Way_You_Are%2C_Official_Movie_Poster.jpg',
        category: 'DRAMA'
    },
    {
        id: 14,
        imgUrl: 'https://www.scrolldroll.com/wp-content/uploads/2022/03/Lord-of-the-rings-Best-Adventure-Movies-To-Watch-On-A-Lazy-Afternoon-scaled.jpg',
        category: 'ADVENTURE'
    },
    {
        id: 15,
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_gKRsW6VxyGhG-d5c8QIKun_LVX0miY3VA&usqp=CAU',
        category: 'ADVENTURE'
    },
    {
        id: 16,
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk9OIalYPy9tOCJQx1KGMJ4KqXaY-QIO_qTg&usqp=CAU',
        category: 'ADVENTURE'
    },
    {
        id: 17,
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvycRnLnHpunhk9taCvnh2ZgxQAa_uUfOAmw&usqp=CAU',
        category: 'ADVENTURE'
    },
    {
        id: 18,
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmXTHjKv3ARsSFnvBu1MSs5ZbdSXqrx4YfXX4RoLwIzY6UUVSX0CIinUXZ-LBJ5CFC74w&usqp=CAU',
        category: 'ADVENTURE'
    },
    {
        id: 19,
        imgUrl: 'https://resizing.flixster.com/GlUjAg9qG2My8F9VjusPng23Ts0=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p13499680_p_v12_bg.jpg',
        category: 'ADVENTURE'
    },
    {
        id: 20,
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7CjxbTsH22NaIhTDfQI9x0x0FK9gIaDhVptOWyC-9qYqHSuni-qylsyn-9z7K3cWxxUQ&usqp=CAU',
        category: 'ADVENTURE'
    },
    {
        id: 21,
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPWx-tQ8Tq8yX18-aHXwnaPJp31dEPM_en2GuYgd4XmNjRYEKrfmwmZz2GrfEifO0GMbk&usqp=CAU',
        category: 'SCI-FI'
    },
    {
        id: 22,
        imgUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny8xMCAgMy4ySyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00348519-xbjcpfxlqm-portrait.jpg',
        category: 'SCI-FI'
    },

    {
        id: 23,
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb4tkYvGzGmLf6-dCA6aSgWrLFfF3ukC_gbw&usqp=CAU',
        category: 'SCI-FI'
    },
    {
        id: 24,
        imgUrl: 'https://hips.hearstapps.com/bpc.h-cdn.co/assets/16/35/640x908/prometheus.jpg?resize=480:*',
        category: 'SCI-FI'
    },
]


export function moviesList() {
    return Movies;
}






export function tabListCategory() {
    return tabList;
}