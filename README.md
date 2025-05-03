# Film-API-Backend

## Tugas

Guild master ingin menonton film dan series, tapi kebingungan untuk memilih film dan series apa yang bagus untuk ditonton. Oleh karena itu, guild master menugaskan para heroes untuk membuat application programming interface (API) untuk sebuah aplikasi review film dan series yang ia namakan ReviewPiLem (RPL). Selain itu, ia juga menugaskan para heroes untuk membuat dokumentasi API agar dapat digunakan oleh tim front end. 


### Ketentuan

Terdapat 3 jenis pengguna, yaitu:

* `admin` - administrator aplikasi dengan otoritas tertinggi
* `user` - pengguna aplikasi yang memiliki akun dan melakukan login
* `guest` - pengguna aplikasi yang tidak memiliki akun atau tidak melakukan login

Setiap `admin` dapat melakukan semua hal yang dapat dilakukan oleh `user`, dan setiap `user` dapat melakukan semua hal yang dapat dilakukan oleh `guest`. Akun admin tidak dibuat melalui proses registrasi, melainkan dibuat menggunakan seeder.


#### **Fitur Admin**


1. **Menambahkan genre**

   Genre setidaknya memiliki atribut nama dan bisa saja dibuat melalui seeder, namun admin mempunya otoritas untuk menambah genre baru dan mengedit genre. Genre tidak bisa dihapus.

2. **Menambahkan film**

   Film (atau series) setidaknya memiliki detail informasi seperti berikut:

   
   1. Judul
   2. Sinopsis
   3. Gambar (bisa lebih dari satu)
   4. Genre (bisa lebih dari satu)
   5. Status penayangan: `not_yet_aired`, `airing`, atau `finished_airing`
   6. Total episode
   7. Tanggal rilis


**Penjelasan status:**

* `not_yet_aired`, film atau series belum ditayangkan
* `airing`, film atau series sedang dalam penayangan
* `finished_airing`, film atau series sudah selesai ditayangkan


#### **Fitur User**


1. **Register dan Login**
   * Akun `user` dapat dibuat melalui registrasi untuk membuat akun.
   * `user` yang sudah memiliki akun dapat melakukan login.

2. **Memasukan film ke dalam list**

   List adalah daftar film yang dimiliki setiap user dan bersifat publik. Ketika suatu film sudah masuk ke dalam list, film tersebut tidak dapat dikeluarkan dari list, namun hanya dapat dipindah-pindah saja statusnya. Terdapat 5 jenis list film:
   * `plan_to_watch` - user berencana untuk menonton film/series ini
   * `watching` - user sedang menonton film/series ini
   * `completed` - user sudah menonton film/series ini
   * `on_hold` - user sebelumnya menonton film/series ini, namun berhenti di tengah-tengah sebelum film/series selesai dengan maksud akan melanjutkannya di kemudian hari
   * `dropped` - user sebelumnya menonton film/series ini, namun berhenti di tengah-tengah sebelum film/series selesai dan tidak berencana melanjutkannya di kemudian hari

   Film dengan status penayangan `not_yet_aired` hanya dapat dimasukkan ke list dengan status `plan_to_watch`.



3. **Profil**

   Setiap user yang memiliki akun memiliki profil yang dibuat ketika registrasi akun dan dapat dilihat oleh user lain termasuk guest. Data pada profil dapat diubah oleh user itu sendiri. Ketika melihat profil seorang user, paling tidak terdapat data berikut:

   
   1. Username
   2. Display name
   3. Bio
   4. Daftar film/series dalam list user



4. **Melakukan review**
   * Review terdiri dari rating (berupa bilangan bulat dari 1 hingga 10) dan komentar, serta dapat dibuat, diperbarui, dan dihapus.
   * User **hanya** dapat dapat me-*review* film yang dimasukkan ke dalam list. User **hanya** dapat me-*review* film yang ada dalam list **selain** `plan_to_watch`. Film yang telah di *review* tidak dapat dimasukkan ke dalam list `plan_to_watch`.
   * Sebagai konsekuensi, film dengan status `not_yet_aired` (belum ditayangkan) tidak dapat di-review.
   * Review film/series bersifat publik.



5. **Like/dislike review**
   * Review dapat diberi *like* atau *dislike* oleh `user` lain, termasuk oleh pembuat review itu sendiri
   * User dapat melakukan *like* atau *dislike* suatu review, namun tidak keduanya secara bersamaan
   * Jika user mengubah reaksinya terhadap review, misalnya dari *like* ke *dislike*, maka *like* sebelumnya akan otomatis dihapus, dan diganti menjadi *dislike* (begitu pula sebaliknya).


#### Fitur Guest


1. **Melihat daftar film**

   Daftar film setidaknya menampilkan informasi dasar dari film tersebut, seperti:
   * Judul
   * Status penayangan
   * Total episode
   * Tanggal rilis
   * Average rating dari review film hingga ketelitian dua di belakang koma.

2. **Melihat detail film**

   Detail film memuat seluruh informasi mengenai suatu film, termasuk average rating.

3. **Melihat profil dan list user lain, termasuk review yang dibuat user tersebut**

4. **Melakukan pencarian film berdasarkan judul**


#### Fitur Opsional

Akan lebih baik jika mengimplementasikan fitur-fitur berikut:


1. `user` dapat mengatur visibility list filmnya menjadi public atau private
2. Pagination ketika mendapatkan daftar entitas (misalnya daftar film, review, genre, atau film pada list)
3. Fitur search yang lebih advanced

Heroes dibebaskan untuk menambah fitur-fitur lain sesuai kreativitas dan kemampuannya masing-masing. Fitur-fitur yang dibuat di luar fitur wajib dapat menjadi nilai tambah, selama fitur-fitur wajib sudah diimplementasikan terlebih dahulu.


### Ketentuan Tambahan

* Sama seperti tugas pertama, Heroes dibebaskan untuk memilih tech stack (i.e. database, bahasa pemrograman, dan framework) yang digunakan dalam pengerjaan tugas kedua.
* Pilihan tools untuk membuat dokumentasi API dibebaskan kepada Heroes.
* Para heroes diharapkan untuk dapat memberikan justifikasi terkait pemilihan tech stack yang digunakan.
* Para heroes diwajibkan melakukan upaya semaksimal mungkin untuk membuat aplikasi tidak hanya dapat digunakan (*usable*), namun juga aman (*secure*).
