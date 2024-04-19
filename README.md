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
+ **bycrypt:** Parolaları karma hale getirmenize yardımcı olacak bir kütüphane.


---
## Programlar
Şimdi ise sorunsuz bir şekilde uygulamamızı geliştirmemiz için ihtiyacımız olan programları indirip, kurulumunu tamamlayalım.

+ **[WebStorm](https://www.jetbrains.com/webstorm/download/download-thanks.html):** WebStrom çapraz platform bir JavaScript, TypeScript ve web için tümleşik geliştirme ortamıdır. Grafiksel hata ayıklamacısı ve sürüm kontrol sistemi ile entegredir.
+ **[Postman](https://www.postman.com/downloads/):** API'ler oluşturmak ve kullanmak için bir API platformudur. Postman, API yaşam döngüsünün her adımını basitleştirir ve işbirliğini kolaylaştırır.
+ **[MongoDB](https://www.mongodb.com/try/download/community):** ölçeklenebilir, doküman tabanlı, C++ ile geliştirilmiş açık kaynak, NoSQL veritabanı uygulamasıdır. MongoDB, verileri JSON benzeri bir veri biçimi olan BSON tabanlı dokümanlarda saklamaktadır.

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

``Veritabanına Bağlanılamadı!!`` hatasını aldın değil mi? Bu çok normal çünkü [MongoDB İndir](https://www.mongodb.com/try/download/community) medin. Eğer hala aynı hatayı alıyorsan, muhtemelen ``.env`` dosyasında bulunan 

---
### Hazırız, Kullanıcı Kaydına Başlayalım
Önce, kullanıcıların giriş, kayıt ve çıkış yapacağı rotaları belirlememiz lazım. Bunun sebebi, bu rotalar sayesinde kullanıcılarımız yönlendirip, bilgilerini alacağız. ``routers\auth.router.js`` dosyamızı düzenlemeye başlayalım.

#### routers\auth.router.js
Bu, standart rotalarımızı tanımladığımız dosyamız olacak.

``router.post`` giriş ve kayıt işlemleri için kullandığımız ``post`` yöntemi.

#### routers\index.js
Bu, yetki işlemlerini tamımlıdığımız rota dosyamız olacak. Tüm rota dosyalarımızı burada çağırarak dinamik bir yapı oluşturacağız. Oluşturduğumuz bu yapıyı ``app.js`` dosyamıza `import` etmeyi unutmayın. Ve en önemlisi, `routers\index.js` dosyamızı bir middleware olduğunu unutmayın, yani bunu `app.use('/api', router);` olarak tanıtmamız gerekiyor.

Peki bu kadar kod yazdık, tarayıcıdan da çağırdık. Fakat uygulamamız hata verip kapanıyor, neden? Ee biz bunu html olarak döndürmüyoruz ki babayiğit. Postman neden var? Şimdi Postman uygulamanı aç ve ``http://localhost:3000/api/login`` adresine `post` isteği at ve olanları gör.

Şimdi Postman üzerinden, ``http://localhost:3000/api/register`` adresine istek atalım. Postman'dan, adres çubuğunun altında Body menüsün altında Raw seçeneğini seç ve `models/user.model.js` dosyamızın içerisinde tanımladığımız verilere göre istek at, yani;

``` 
{
    "name": "Göktay",
    "lastName": "Gürbüzer",
    "email": "goktaygurbuzer14@gmail.com",
    "password": "ÇokGizliŞifre"
}
```

Niye diğerler bilgileri girmedik? diye sorabilirsin. Çünkü onlara varsayılan değerler atadık zaten. Yani her kullanıcı için buradan tarih nesnesi oluşturup, günün tarihini buradan göndermemize gerek yok. 

Şimdi ise hata yönetimini ele alalım. ``utils\errors.js`` dosyamızı doldurmaya başlayalım. Önce API'miz ile ilgili olan hata tanımlamasını belirtiyoruz. Ardından tüm hatalarımızı yöneteceğmiz `/middlewares/errorHandle.js` dosyamızda, API için oluşturduğumuz hata fonksiyonunu ekliyoruz. Burada, daha sonradan oluşturduğumuz tümm hata kontrollerini ekleyeceğiz.

Bu arada, artık API'miz üzerinde hata veya durum göstermek istiyorsak, şu kodu kullanmamız yeterli; 
```
import APIError from "../utils/errors.js";
/...

.../
throw new APIError("Girmiş Olduğunuz Email Kullanımda !", 401);
```