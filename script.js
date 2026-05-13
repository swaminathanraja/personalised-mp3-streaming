const songs = [
  { title: "Kanmani Anbodu", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325380/Kanmani-Anbodu_hkdzbe.mp3" },
  { title: "Kuzhal Oothum Kannanukku", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325380/Kuzhal-Oothum-Kannanukku_acouf2.mp3" },
  { title: "Kannukkul Nooru Nilava", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325380/Kannukkul_Nooru_Nilava_rl02eg.mp3" },
  { title: "Ennulle Ennulle", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325380/Ennulle_Ennulle_im10gw.mp3" },
  { title: "Aanenna Pennenna", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325378/Aanenna_Pennenna_brr0mm.mp3" },
  { title: "Siru Koottula", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325377/Siru_Koottula_vnzy6z.mp3" },
  { title: "Sandhaikku Vantha Kili", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325376/Sandhaikku_Vantha_Kili_ql3mel.mp3" },
  { title: "Poove Sempoove (Male)", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325376/Poove_Sempoove_Male_q0agbl.mp3" },
  { title: "Nikkattumaa Pogattuma", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325373/Nikkattumaa_Pogattuma_h5co8f.mp3" },
  { title: "Maniyae Manikkuyile", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325373/Maniyae_Manikkuyile_fuprlq.mp3" },
  { title: "Poongodithan Poothathamma", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325373/Poongodithan_Poothathamma_ngbfmc.mp3" },
  { title: "Medhuva Medhuva", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325373/Medhuva_Medhuva__MassWala.Com_cvjvu0.mp3" },
  { title: "Malai Kovil Vaasal", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325372/Malai-Kovil-Vaasal_rzf5qh.mp3" },
  { title: "Konji Konji Male", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325370/Konji-Konji-Male_gn4bft.mp3" },
  { title: "Etho Mogam", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325350/Etho-Mogam-MassTamilan.com_fyv7nt.mp3" },
  { title: "Idhayamae Idhayamae", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325347/Idhayamae_Idhayamae_xbmd6a.mp3" },
  { title: "Endha Pennilum", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325345/Endha_Pennilum_PenduJatt.Com.Se_vxco9n.mp3" },
  { title: "Gangai Karai Mannanadi", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325345/Gangai_Karai_Mannanadi_njhhjw.mp3" },
  { title: "Velli Nilave", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325344/Velli-Nilave-MassTamilan.com_fjhf8d.mp3" },
  { title: "Chittu Parakkuthu Kuthalathil", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325343/Chittu-Parakkuthu-Kuthalathil-MassTamilan.com_wxbxy2.mp3" },
  { title: "Thendral Vanthu", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325343/Thendral_Vanthu_zezvej.mp3" },
  { title: "Yedhedho Ennam Valarthen", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325341/Yedhedho_Ennam_Valarthen_giqgee.mp3" },
  { title: "Yae Paadal Ondru", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325342/Yae-Paadal-Ondru-MassTamilan.dev_q9ahir.mp3" },
  { title: "Aagaya Thamarai", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325341/Aagaya_Thamarai_tg91lm.mp3" },
  { title: "Sollivedu Velli Nilave", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325340/Sollivedu_Velli_Nilave_ki3mtr.mp3" },
  { title: "Rathiriyil Paadum", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325340/Rathiriyil_Paadum_lwxewg.mp3" },
  { title: "Adi Poonguyile", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325340/Adi_Poonguyile_vnzohu.mp3" },
  { title: "Aagaya Vennilavae", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325338/Aagaya_Vennilavae_c8yyyw.mp3" },
  { title: "Vaa Vaa Anbe Anbe", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325337/Vaa_Vaa_Anbe_Anbe_kouhho.mp3" },
  { title: "Thoothuvalai", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325337/Thoothuvalai_attaeh.mp3" },
  { title: "Ye Rasaathi", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325337/Ye_Rasaathi_kuxiit.mp3" },
  { title: "Thoongatha Vizhigal", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325337/Thoongatha_Vizhigal_ekigzc.mp3" },
  { title: "Pottu Vaitha (Version 2)", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325335/Pottu_Vaitha_Version_2_lzzhjh.mp3" },
  { title: "Valaiyosai", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325334/Valaiyosai_cnkpos.mp3" },
  { title: "Vanthanam", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325333/Vanthanam-MassTamilan.com_h8ew0v.mp3" },
  { title: "Solai Malai", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325333/Solai_Malai_sn2fdc.mp3" },
  { title: "Thendral Thaan", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325333/Thendral_Thaan_y5lypa.mp3" },
  { title: "Putham Pudhu Malare", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325332/Putham-Pudhu-Malare-MassTamilan.com_uwnujl.mp3" },
  { title: "Vaanuyarntha Solaiyile", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325331/Vaanuyarntha_Solaiyile_xgolpw.mp3" },
  { title: "Thalattum Poongkaatru", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325329/Thalattum_Poongkaatru_f4jn6i.mp3" },
  { title: "Raaja Raajathi", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325329/Raaja_Raajathi_ydjhhe.mp3" },
  { title: "Paadu Nilave", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325329/Paadu-Nilave-MassTamilan.com_vjjhjo.mp3" },
  { title: "Panivizhum Malar Vanam", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325329/Panivizhum-Malar-Vanam-MassTamilan.com_q2uh18.mp3" },
  { title: "Valli Valli Enna", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325327/Valli_Valli_Enna_golh7y.mp3" },
  { title: "Un Manasula Paattuthaan", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325326/Un_Manasula_Paattuthaan_Happy_j2jzdl.mp3" },
  { title: "Mazhaikaala Megam", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325326/Mazhaikaala-Megam-MassTamilan.com_khal9v.mp3" },
  { title: "Unna Nenachen", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325326/Unna_Nenachen_nvexds.mp3" },
  { title: "Puthiya Poovithu", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325325/Puthiya_Poovithu_jeqhdo.mp3" },
  { title: "Rojavai Thaalattum Thendral", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325325/Rojavai-Thaalattum-Thendral-MassTamilan.com_mkbsfl.mp3" },
  { title: "Vaa Vennila Unnai Thane", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325324/Vaa-Vennila-Unnai-Thane_vf3okm.mp3" },
  { title: "Aasaiye Kaathule", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325321/Aasaiye-Kaathule-MassTamilan.com_ixhp9l.mp3" },
  { title: "Priyasakhi", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325322/Priyasakhi_dbse7b.mp3" },
  { title: "Raasave Unnai Vida", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325321/Raasave_Unnai_Vida_izg37o.mp3" },
  { title: "Vaazhvey Maayam", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325320/Vaazhvey-Maayam-MassTamilan.com_cbtxqt.mp3" },
  { title: "Nee Pathi Naan Pathi", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325320/Nee_Pathi_Naan_Pathi_bmkz8a.mp3" },
  { title: "Singalathu Chinnakuyile", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325318/Singalathu_Chinnakuyile_ksvnfy.mp3" },
  { title: "Sandhana Kaatre", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325318/Sandhana_Kaatre_bzq1ik.mp3" },
  { title: "Thenae Thenpandi", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325318/Thenae-Thenpandi-MassTamilan.com_vfrm4v.mp3" },
  { title: "Thenmadurai Vaigai Nadhi", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325317/Thenmadurai_Vaigai_Nadhi_pckxav.mp3" },
  { title: "Roja Poo Adivanthathu", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325316/Roja_Poo_Adivanthathu_gekl4c.mp3" },
  { title: "Pudhu Maappillaikku", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325315/Pudhu_Maappillaikku_vmamtl.mp3" },
  { title: "Poo Pookkum Maasam", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325315/Poo_Pookkum_Maasam_sivh5y.mp3" },
  { title: "Nenjukulle Innarunnu", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325314/Nenjukulle-Innarunnu-MassTamilan.com_zyrbdv.mp3" },
  { title: "Raja Raja Chozhan Naan", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325314/Raja_Raja_Chozhan_Naan_unu0ij.mp3" },
  { title: "Poonthalir Aada", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325312/Poonthalir_Aada_fuaxxq.mp3" },
  { title: "Maasi Maasam", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325311/Maasi_Maasam_ukgp8z.mp3" },
  { title: "Taj Mahal Thevai Illai", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325311/Taj-Mahal-Thevai-Illai-MassTamilan.com_vercwm.mp3" },
  { title: "Malligai Mottu", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325311/Malligai_Mottu_dopaka.mp3" },
  { title: "Pesa Koodaathu", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325310/Pesa_Koodaathu_yfzxa4.mp3" },
  { title: "Thedum Kan Parvai", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325310/Thedum-Kan-Parvai_qeywww.mp3" },
  { title: "Paattu Thalaivan", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325308/Paattu_Thalaivan_n2taxi.mp3" },
  { title: "Panivizhum Iravu", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325307/Panivizhum_Iravu_t2hbdn.mp3" },
  { title: "Thendral Vandhu", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325307/Thendral_Vandhu_wq1tvg.mp3" },
  { title: "Naan Paadum Mouna Raagam", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325307/Naan_Paadum_Mouna_Raagam_jcztma.mp3" },
  { title: "Malare", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325305/Malare_aybolj.mp3" },
  { title: "Nilaave Vaa", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325305/Nilaave_Vaa_txguzn.mp3" },
  { title: "Oru Paatale Solli", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325304/Oru_Paatale_Solli_wlxgsi.mp3" },
  { title: "Malligaiye Malligaiye", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325304/Malligaiye_Malligaiye_aazxoa.mp3" },
  { title: "Shenbagame Shenbagame", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325303/Shenbagame_Shenbagame_azczue.mp3" },
  { title: "Maanam Idi Idikka", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325302/Maanam_Idi_Idikka_dc8v41.mp3" },
  { title: "Muthumani Maala", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325301/Muthumani_Maala_pnbolb.mp3" },
  { title: "Ponvaanam Panneer Thoovuthu", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325300/Ponvaanam_Panneer_Thoovuthu_bylrcw.mp3" },
  { title: "Kuyilu Kuppam", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325300/Kuyilu_Kuppam_upeikg.mp3" },
  { title: "Kalaivaniyo Raniyo", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325300/Kalaivaniyo_Raniyo_a6sjvh.mp3" },
  { title: "Germaniyin", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325300/Germaniyin-MassTamilan.com_k5g1vm.mp3" },
  { title: "Mani Osai", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325298/Mani_Osai_qhz2vz.mp3" },
  { title: "Kalyana Maalai 1", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325297/Kalyaana_Maalai_1_r9aksv.mp3" },
  { title: "Oru Poonga Vanam", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325297/Oru_Poonga_Vanam_x3oanu.mp3" },
  { title: "Poove Illaya Poove", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325296/Poove-Illaya-Poove-MassTamilan.com_l0vxrx.mp3" },
  { title: "Mandram Vandha Thendralukku", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325295/Mandram_Vandha_Thendralukku_qvdivo.mp3" },
  { title: "Ninnukori Varanam", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325295/Ninnukori_Varanam_kgs1sq.mp3" },
  { title: "Kalyana Maalai", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325295/Kalyaana_Maalai_zauirf.mp3" },
  { title: "Poo Maalaye Thol Seravaa", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325293/Poo-Maalaye-Thol-Seravaa-MassTamilan.com_w3nevm.mp3" },
  { title: "Keladi Kanmani", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325293/Keladi_Kanmani_l0mc3g.mp3" },
  { title: "Mannil Indha", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325292/Mannil_Indha_lnyuzj.mp3" },
  { title: "Mudhal Mudhal", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325292/Mudhal_Mudhal_td5rpy.mp3" },
  { title: "Muthamizh Kaviye Varuga", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325291/Muthamizh_Kaviye_Varuga_dclzwf.mp3" },
  { title: "Dhillubaru Janae", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325290/Dhillubaru-Janae-MassTamilan.com_rknonb.mp3" },
  { title: "Keeravani", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325289/Keeravani-MassTamilan.com_mlfanc.mp3" },
  { title: "Ennuyir Nee Thaane", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325289/Ennuyir-Nee-Thaane-MassTamilan.dev_gp6kob.mp3" },
  { title: "Kodai Kaala Kaatre", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325289/Kodai_Kaala_Kaatre_k51wmr.mp3" },
  { title: "Hey Vennila", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325287/Hey_Vennila_PenduJatt.Com.Se_qis5vd.mp3" },
  { title: "Dhevadhai Pol", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325287/Dhevadhai_Pol_jbqf9r.mp3" },
  { title: "Neela Vaana Oodayil", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325287/Neela-Vaana-Oodayil-MassTamilan.com_wgjg16.mp3" },
  { title: "Ilaiya Nila", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325285/Ilaiya_Nila_bbfvl0.mp3" },
  { title: "Darling Darling", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325285/Darling-Darling-_Tamil_-MassTamilan.dev_dfwikn.mp3" },
  { title: "Oho Megam Vandhadho", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325283/Oho_Megam_Vandhadho_uusdyf.mp3" },
  { title: "Mazhai Varudhu", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325283/Mazhai_Varudhu_Mazhai_Varudhu_eprq4i.mp3" },
  { title: "Kaathirundu Kaathirundhu", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325282/Kaathirundu-Kaathirundhu_k1ztd1.mp3" },
  { title: "Kootathile Kovil Pura", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325281/Kootathile_Kovil_Pura_uojspa.mp3" },
  { title: "Madura Marikkozhunthu", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325281/Madura_Marikkozhunthu_oojd33.mp3" },
  { title: "Deiveega Raagam", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325280/Deiveega-Raagam-MassTamilan.com_hl1zvy.mp3" },
  { title: "Malaiyoram Veesum Kaatru (Male)", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325280/Malaiyoram_Veesum_Kaatru_Male_z5armk.mp3" },
  { title: "Azhagu Malar Aada", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325280/Azhagu-Malar-Aada_kiqu4i.mp3" },
  { title: "Kanmani Nee Varavendum", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325278/Kanmani_Nee_Varavendum_bvwow4.mp3" },
  { title: "Ilam Vayasu Ponna", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325277/Ilam_Vayasu_Ponna_rbx1pi.mp3" },
  { title: "Kaathalin Deepam Ondru (Male)", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325277/Kaathalin_Deepam_Ondru_Male_exgpsn.mp3" },
  { title: "Guruvayurappa", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325276/Guruvayurappa_kuezqf.mp3" },
  { title: "Kalai Nera Male", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325276/Kalai_Nera_Male_ka8duk.mp3" },
  { title: "Kadhal Kavithaigal", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325275/Kadhal_Kavithaigal_fudo6m.mp3" },
  { title: "Koondukkulla", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325275/Koondukkulla_yfv4ff.mp3" },
  { title: "Unnai Thaney Thanjam", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325274/Unnai-Thaney-Thanjam-MassTamilan.dev_tbsguz.mp3" },
  { title: "Kaaki Satta", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325273/Kaaki-Satta-MassTamilan.com_thdlxx.mp3" },
  { title: "Adi Athadi", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325272/Adi-Athadi-MassTamilan.com_llkhgm.mp3" },
  { title: "Idhayam Oru Kovil", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325271/Idhayam_Oru_Kovil_u8sunu.mp3" },
  { title: "Kodiyile Malliyapoo", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325271/Kodiyile-Malliyapoo-MassTamilan.com_ej0cht.mp3" },
  { title: "Ennai Thottu", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325271/Ennai_Thottu_cbfgmp.mp3" },
  { title: "Antha Vanatha Pola Manam", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325269/Antha_Vanatha_Pola_Manam_xkpfey.mp3" },
  { title: "Kalyana Thaen Nilaa", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325269/Kalyaana_Thaen_Nilaa_jgfgg3.mp3" },
  { title: "Akkarai Seemai", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325268/Akkarai-Seemai-MassTamilan.dev_xdqbcm.mp3" },
  { title: "Sangathil Padatha", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325268/Sangathil_Padatha_er8cxn.mp3" },
  { title: "Sangeetha Megham", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325267/Sangeetha-Megham-MassTamilan.com_xidvx5.mp3" },
  { title: "Un Paarvayil Male", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325267/Un_Paarvayil_Male_gyuisp.mp3" },
  { title: "Kavithai Paadu", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325266/Kavithai_Paadu_jdphhw.mp3" },
  { title: "Chinna Chinna Vanna Kuyil", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325266/Chinna_Chinna_Vanna_Kuyil_aintgd.mp3" },
  { title: "Annaaththe Aaduraar", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325265/Annaaththe_Aaduraar_dpuabl.mp3" },
  { title: "Ananda Ragam Ketkum Kaalam", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325265/Ananda_Ragam_Ketkum_Kaalam_l7om7e.mp3" },
  { title: "Devi Sri Devi", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325264/Devi-Sri-Devi-MassTamilan.com_yee72k.mp3" },
  { title: "En Vaanilay", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325263/En-Vaanilay-MassTamilan.com_j0bart.mp3" },
  { title: "Enna Saththam Indha Neram", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325262/Enna_Saththam_Indha_Neram_zbrkui.mp3" },
  { title: "Dil Dil Dil Manadhil", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325262/Dil-Dil-Dil-Manadhil_r2scix.mp3" },
  { title: "Oorusanam Thoongiduchu", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325261/Oorusanam-Thoongiduchu_fpjv5d.mp3" },
  { title: "Senthazham Poovil", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325260/Senthazham-Poovil-MassTamilan.com_n9crrq.mp3" },
  { title: "Neethane Enthan", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325258/Neethane-Enthan-MassTamilan.com_ezi30y.mp3" },
  { title: "Poongaatru Puthithaanathu", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325258/Poongaatru_Puthithaanathu_jgpgh9.mp3" },
  { title: "Raasaathi Unnai Kaanatha Nenjam", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325258/Raasaathi-Unnai-Kaanatha-Nenjam_j8bz1k.mp3" },
  { title: "Nee Partha", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325258/Nee-Partha_atgki3.mp3" },
  { title: "Oru Kadhal Devadhai", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325257/Oru_Kadhal_Devadhai_isefpn.mp3" },
  { title: "Oorellam Saamiyaga", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325256/Oorellam_Saamiyaga_nudndz.mp3" },
  { title: "Unakenna Mele Ninraai", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325256/Unakenna_Mele_Ninraai_ml0ng9.mp3" },
  { title: "Poongathavae", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325255/Poongathavae-MassTamilan.com_pdhblo.mp3" },
  { title: "Kanne Kalaimaane", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325254/Kanne_Kalaimaane_z05gef.mp3" },
  { title: "Endhan Nenjil", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325253/Endhan-Nenjil-MassTamilan.com_mcz15v.mp3" },
  { title: "Kannan Vanthu", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325253/Kannan_Vanthu_i4ed4n.mp3" },
  { title: "Kaatril Enthan", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325253/Kaatril-Enthan-MassTamilan.com_pnbcrp.mp3" },
  { title: "Nila Kaigiradhu", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325252/Nila-Kaaigiradhu-_F_-MassTamilan.dev_jdl81m.mp3" },
  { title: "Thanga Changili", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325252/Thanga_Changili_itn9ub.mp3" },
  { title: "Antha Nilava Than", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325251/Antha-Nilava-Than_baw5ut.mp3" },
  { title: "Vetti Veru Vaasam", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325251/Vetti-Veru-Vaasam_beat1n.mp3" },
  { title: "Poove Eduthu", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325251/Poove_Eduthu_qb7lsm.mp3" },
  { title: "Chinnamani Kuyile", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325251/Chinnamani_Kuyile_bddxvg.mp3" },
  { title: "Poongatru Thirumbuma", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325250/Poongatru-Thirumbuma_wcyyv5.mp3" },
  { title: "Madai Thiranthu", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325249/Madai-Thiranthu-MassTamilan.com_ahrxfe.mp3" },
  { title: "Maasi Maasam Dhan", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325248/Maasi_Maasam_Dhan_SPB_KS_Chitra_vmg3vx.mp3" },
  { title: "Ithu Oru Pon Malai", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325248/Ithu-Oru-Pon-Malai-MassTamilan.com_xpwly7.mp3" },
  { title: "En Iniya Pon Nilave Pon", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325248/En_Iniya_Pon_Nilave_Pon_kwtq1n.mp3" },
  { title: "Ilamai Ennum Poonkaatru", src: "https://res.cloudinary.com/dmwrft9jj/video/upload/v1778325248/Ilamai-Ennum-Poonkaatru-MassTamilan.dev_egunu1.mp3" }
];

const playlist = document.getElementById("playlist");
const audioPlayer = document.getElementById("audioPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const loopBtn = document.getElementById("loopBtn");
const themeToggleBtn = document.getElementById("themeToggleBtn");
const trackArt = document.querySelector(".track-art");
const currentTitle = document.getElementById("currentTitle");
const currentTrackInfo = document.getElementById("currentTrackInfo");
const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime");
const durationTime = document.getElementById("duration");
const searchInput = document.getElementById("searchInput");
const volumeSlider = document.getElementById("volumeSlider");
const volumePercent = document.getElementById("volumePercent");

let currentTrackIndex = null;
let isPlaying = false;
let isShuffle = false;
let isLoop = false;

function buildGradient(title) {
  const hash = Array.from(title).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const color1 = `hsl(${hash % 360}, 86%, 45%)`;
  const color2 = `hsl(${(hash + 120) % 360}, 78%, 52%)`;
  return `linear-gradient(135deg, ${color1}, ${color2})`;
}

function setAlbumArt(title) {
  trackArt.textContent = title.slice(0, 2).toUpperCase();
  trackArt.style.background = buildGradient(title);
}

function createTrackItem(song, index) {
  const item = document.createElement("div");
  item.className = "track-item";
  item.dataset.index = index;

  const meta = document.createElement("div");
  meta.className = "track-meta";
  const title = document.createElement("p");
  title.className = "track-title";
  title.textContent = song.title;
  const source = document.createElement("p");
  source.className = "track-source";
  source.textContent = song.src.replace(/^https?:\/\//, "");
  meta.append(title, source);

  const equalizer = document.createElement("div");
  equalizer.className = "equalizer";
  for (let i = 0; i < 5; i++) {
    const bar = document.createElement("div");
    bar.className = "bar";
    equalizer.appendChild(bar);
  }

  const button = document.createElement("button");
  button.textContent = "Play";
  button.addEventListener("click", () => setTrack(index));

  item.append(meta, equalizer, button);
  return item;
}

function updateActiveTrack() {
  const items = playlist.querySelectorAll(".track-item");
  items.forEach((item) => {
    item.classList.toggle("active", Number(item.dataset.index) === currentTrackIndex);
  });
}

function renderPlaylist(filteredSongs) {
  playlist.innerHTML = "";
  filteredSongs.forEach(({ song, index }) => {
    const item = createTrackItem(song, index);
    playlist.append(item);
  });
  updateActiveTrack();
}

function setTrack(index) {
  const song = songs[index];
  if (!song) return;

  currentTrackIndex = index;
  audioPlayer.src = song.src;
  currentTitle.textContent = song.title;
  currentTrackInfo.textContent = `Track ${index + 1} of ${songs.length}`;
  setAlbumArt(song.title);
  playPauseBtn.disabled = false;
  prevBtn.disabled = index <= 0;
  nextBtn.disabled = index >= songs.length - 1;
  playPauseBtn.textContent = "⏸️";
  isPlaying = true;
  // Remove playing from all items
  playlist.querySelectorAll(".track-item").forEach(item => item.classList.remove("playing"));
  updateActiveTrack();
  const activeItem = playlist.querySelector(".track-item.active");
  if (activeItem) {
    activeItem.classList.add("playing");
  }
  audioPlayer.play().catch(() => {
    playPauseBtn.textContent = "▶️";
    isPlaying = false;
    const activeItem = playlist.querySelector(".track-item.active");
    if (activeItem) {
      activeItem.classList.remove("playing");
    }
  });
}

function togglePlayPause() {
  if (!audioPlayer.src) return;
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.textContent = "⏸️";
    isPlaying = true;
    const activeItem = playlist.querySelector(".track-item.active");
    if (activeItem) {
      activeItem.classList.add("playing");
    }
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = "▶️";
    isPlaying = false;
    const activeItem = playlist.querySelector(".track-item.active");
    if (activeItem) {
      activeItem.classList.remove("playing");
    }
  }
}

function playPrevious() {
  if (currentTrackIndex === null || currentTrackIndex <= 0) return;
  setTrack(currentTrackIndex - 1);
}

function playNext() {
  if (currentTrackIndex === null) return;
  let nextIndex;
  if (isShuffle) {
    nextIndex = Math.floor(Math.random() * songs.length);
  } else {
    nextIndex = (currentTrackIndex + 1) % songs.length;
  }
  setTrack(nextIndex);
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

audioPlayer.addEventListener("loadedmetadata", () => {
  progressBar.max = Math.floor(audioPlayer.duration);
  durationTime.textContent = formatTime(audioPlayer.duration);
});

function updateProgressBarBackground() {
  const max = Number(progressBar.max) || 1;
  const value = Number(progressBar.value) || 0;
  const percent = (value / max) * 100;
  progressBar.style.background = `linear-gradient(90deg, var(--accent) 0%, var(--accent) ${percent}%, var(--surface-alt) ${percent}%, var(--surface-alt) 100%)`;
}

audioPlayer.addEventListener("timeupdate", () => {
  progressBar.value = Math.floor(audioPlayer.currentTime);
  updateProgressBarBackground();
  currentTime.textContent = formatTime(audioPlayer.currentTime);
});

progressBar.addEventListener("input", () => {
  audioPlayer.currentTime = progressBar.value;
  updateProgressBarBackground();
});

updateProgressBarBackground();

audioPlayer.addEventListener("ended", () => {
  if (isLoop) {
    audioPlayer.currentTime = 0;
    audioPlayer.play();
  } else {
    if (currentTrackIndex < songs.length - 1) {
      playNext();
    } else {
      playPauseBtn.textContent = "▶️";
      isPlaying = false;
      const activeItem = playlist.querySelector(".track-item.active");
      if (activeItem) {
        activeItem.classList.remove("playing");
      }
    }
  }
});

function setTheme(theme) {
  document.body.classList.toggle("light-theme", theme === "light");
  themeToggleBtn.textContent = theme === "light" ? "☀️" : "🌙";
  localStorage.setItem("theme", theme);
}

themeToggleBtn.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("light-theme") ? "dark" : "light";
  setTheme(nextTheme);
});

prevBtn.addEventListener("click", playPrevious);
nextBtn.addEventListener("click", playNext);
playPauseBtn.addEventListener("click", togglePlayPause);

shuffleBtn.addEventListener("click", () => {
  isShuffle = !isShuffle;
  shuffleBtn.classList.toggle("active", isShuffle);
});

loopBtn.addEventListener("click", () => {
  isLoop = !isLoop;
  loopBtn.classList.toggle("active", isLoop);
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = songs
    .map((song, index) => ({ song, index }))
    .filter(({ song }) => song.title.toLowerCase().includes(query));
  renderPlaylist(filtered);
});

volumeSlider.addEventListener("input", () => {
  const volumeValue = volumeSlider.value / 100;
  audioPlayer.volume = volumeValue;
  const percent = (volumeSlider.value / 100) * 100;
  volumeSlider.style.setProperty('--value', percent + '%');
  volumePercent.textContent = Math.round(percent) + '%';
});

// Set initial volume
audioPlayer.volume = volumeSlider.value / 100;
volumeSlider.style.setProperty('--value', volumeSlider.value + '%');
volumePercent.textContent = volumeSlider.value + '%';

const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);
renderPlaylist(songs.map((song, index) => ({ song, index })));
