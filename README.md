# NodeJS ile WEBAPI Denemeleri
## Hedef
NodeJS ile bir webapi projesi nasıl oluşturulur, nelere dikkat edilir ve nasıl ayağa kaldırılır konularını işleyeceğiz. İmkanlarım doğrultusunda yapılan her işlemi net bir şekilde açıklamaya özen göstereceğim. Unutmayın, bende sizlerle beraber nodejs öğreniyorum.

---
## Paketler
``npm i express nodemon dotenv jsonwebtoken express-async-errors mongoose``

+ **express:** Node.js için hızlı, görüşsüz, minimalist web çerçevesi.
+ **nodemon:** nodemon, dizindeki dosya değişiklikleri algılandığında node uygulamasını otomatik olarak yeniden başlatarak Node.js tabanlı uygulamalar geliştirmeye yardımcı olan bir araçtır.
+ **dotenv:** ortam değişkenlerini bir .env dosyasından process.env dosyasına yükleyen sıfır bağımlılık modülüdür.
+ **jsonwebtoken:** JSON Web Token, tarafların birbirleri arasındaki veri alışverişini ve bunun doğrulamasını sağlayan JSON tabanlı RFC 7519'de tanımlanmış açık bir standarttır.
+ **express-async-errors:** ExpressJS için son derece basit bir ES6 async/await desteği hack'i
+ **mongoose:** Mongoose, eşzamansız bir ortamda çalışmak üzere tasarlanmış bir MongoDB nesne modelleme aracıdır.

---
## Başlıyoruz
Öncelikle ihtiyacımız olan klasör yapısını oluşturuyoruz. Bu klasörleri ``src`` dizinin altında oluşturacağız.
+ **controllers:** Tüm controlleri burada yazacağız
+ **db:** Veritabanı bağlantımızı burada yazacağız.
+ **middlewares:** Ara yazılımlarımızı burada yazacağız.
+ **models:** Verilerimizi burada tanımlayacağız.
+ **routers:** Kullanıcı isteklerini buradan tanımlayacağız.
+ **utils:** Oluşturacağımız araçlarımızı burada yazacağız.

---

### Önce Model!
Herşeyden önce neler yapacağımızı ve verileri nasıl tutacağımızı belirlemeliyiz. Bunun için ``models`` klasörünü kullanacağız. İçerisine dikkat ettiğinizde, veritabanımızda oluşturacağımız tabloları tanımlamış bulunmaktayız. Dosyaları incelediğinizde ise tabloda yer alacak sütunları görmektesiniz. Mongoose modülü ile çok acayip hızlı ve güvenli şekilde, veritabanımızda yer alacak olan sütunları tanımladık. Eğer daha fazla doğrulama veya detay girmek istiyorsanız, [Mongoose Dökümanı](https://www.npmjs.com/package/mongoose)'nı okuyabilirsiniz.

Model tanımlamamızı yaptıktan sonra, ``db`` klasörünümüzünde oluşturduğumuz veritanabı bağlantı dosyasını inceleyelim. Gördüğünüz gibi veritabanı bilgilerini ``.env`` dosyamızdan çekiyoruz. ``dbConnection.js`` dosyamızda görüldüğü gibi, veritabanı bağlantımızı başarı/başarız bir sonuç ile sağladık.

``Veritabanına Bağlanılamadı!!`` hatasını aldın değil mi? Bu çok normal çünkü [MongoDB İndir](https://www.mongodb.com/try/download/community) medin.