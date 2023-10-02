[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/yZWC7OmO)


## Express pake Mysql

```
.
├── README.md
├── app.js      # Entrypoint server/API
├── config      # konfigurasi yang dipakai di aplikasi
│   ├── database.js # konfigurasi db
│   └── schema.sql # sql script buat generate table dan database
├── controllers # 
Controller itu sendiri berperan sebagai pengatur aksi pada aplikasi yang dibangun
│   └── mahasiswa.controller.js ## controller buat si mahasiswa
├── package-lock.json
├── package.json
├── routes # ngatur rute dalam aplikasi
│   └── mahasiswa.routes.js # rute yang terdapat pada "/mahasiswa"
└── services # ngatur logika bisnis yang terjadi pada aplikasi, contoh untuk manipulasi data atau untuk insert data ke database
    └── mahasiswa.service.js
```

## Cara penggunaan

Clone repository ini ke laptop kalian

kalian bisa melakukan instalasi dengan cara

```
npm install
```

nanti akan terbuat satu folder dengan nama `node_modules` yang berisi package yang diinstall dari `npm` dan `package-lock.json` untuk log setiap package yang terinstall.

## Untuk Menjalankannya

tinggal pake command

```
npm run dev
```


## Flow pengerjaan

Route -> Controller -> Service

1. Apabila kita ingin membuat parent route, kita bisa mengubah file app.js dan menambahkan rute baru
2. bikin file something.routes.js dalam folder routes, kalau misalkan udah ada filenya skip aja
3. tambahin rute baru, sesuai dengan http method yang diperlukan, misal `get`, `post`, `put`, `delete`
4. rute yang dibuat tadi kalian bisa koneksikan dengan controller. misal nama controllernya mahasiswaController. di mahasiswaController kalian harus membuat sebuah function untuk handle apa yang kalian mau
5. dari controller akan memanggil service, jadi nanti flownya kira kira

Route -> Controller -> Service -> Controller

mysql:
1. 

Terminal Code:
1. npm init --yes
2. npm install express mysql2 dotenv cors