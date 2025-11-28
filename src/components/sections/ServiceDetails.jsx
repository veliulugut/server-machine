import featureImg from "@/assets/img/service-feat-img.jpg";

export default function ServiceDetails({ slug }) {
    const isAile = slug === 'aile-hukuku';
    const isCeza = slug === 'ceza-hukuku';
    const isIs = slug === 'is-hukuku';
    const isKira = slug === 'kira-hukuku';
    const isIcra = slug === 'icra-hukuku';
    return (
        <div className="service-details-area section-padding">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-xl-8 col-lg-8">
                        <div className="service-details-wrap">
                            <div className="feature-img">
                                <img src={featureImg} alt=""/>
                            </div>
                            {isAile ? (
                                <>
                                    <p>Ebru Çulha Hukuk Bürosu olarak, aile ve boşanma hukuku alanında müvekkillerimizin ihtiyaçlarını doğru analiz edebilen, kapsamlı bir hukuki temsil sunan ve tüm süreçleri kurumsal ciddiyetle yürüten bir anlayışla hizmet vermeye devam ediyoruz.</p>
                                    <h5>Nafaka Süreçleri</h5>
                                    <p>Boşanma sürecinde ve sonrasında nafaka talepleri önemli bir yer tutar. Büro olarak aşağıdaki nafaka türlerinde hukuki başvuruları yapıyor ve talep edilen miktarın doğru belirlenmesi için ekonomik değerlendirmeleri destekliyoruz:</p>
                                    <ul>
                                        <li>Tedbir Nafakası</li>
                                        <li>Yoksulluk Nafakası</li>
                                        <li>İştirak Nafakası</li>
                                    </ul>
                                    <h5>Çocukların Velayeti ve Kişisel İlişki Düzenlemeleri</h5>
                                    <p>Çocuğun üstün yararı ilkesi doğrultusunda geçici ve kesin velayet talepleri, kişisel ilişki (görüşme) düzenlemeleri ve boşanma sonrası velayetin değiştirilmesine ilişkin süreçler titizlikle yürütülür.</p>
                                    <h5>Maddi ve Manevi Tazminat Davaları</h5>
                                    <p>Kusurlu tarafa karşı maddi kayıplar ve kişisel hakların zedelenmesi nedeniyle tazminat talep edilebilir. Taleplerin hesaplanması, delil desteği ve savunma süreçleri kapsamlı şekilde ele alınır.</p>
                                    <h5>Mal Rejimi ve Mal Paylaşımı Davaları</h5>
                                    <p>Evlilik birliği içinde edinilen malların paylaşımı sürecinde mal rejiminin türüne göre hakların tespiti, kayıtların incelenmesi, bilirkişi çalışmaları ve tasfiye davalarının yürütülmesi sağlanır.</p>
                                    <h5>Evlilik Sözleşmeleri</h5>
                                    <p>Evlilik öncesi veya evlilik sürecinde tarafların mal varlıklarını düzenleyen sözleşmelerin hazırlanması, mevcut statünün değerlendirilmesi ve noter onay süreçleri kurumsal danışmanlıkla gerçekleştirilir.</p>
                                    <h5>Koruma Tedbirleri ve İhtiyati Tedbir Başvuruları</h5>
                                    <p>6284 sayılı Kanun kapsamında koruma tedbirleri, konut tahsisi, iletişim yasağı ve uzaklaştırma; ayrıca malvarlığına ihtiyati tedbir ve geçici ekonomik tedbir talepleri hızlı şekilde yapılır ve takip edilir.</p>
                                    <h5>Aile Hukukundan Kaynaklanan Diğer Davalar</h5>
                                    <ul>
                                        <li>Babalık davaları</li>
                                        <li>Soybağına ilişkin davalar</li>
                                        <li>Nafaka artırımı veya azaltılması</li>
                                        <li>Kişisel ilişki düzenlenmesi ve icrası</li>
                                        <li>Aile mahkemesi alanındaki dava ve icra süreçleri</li>
                                    </ul>
                                    <h5>Sonuç Olarak</h5>
                                    <p>Aile hukuku, bireylerin hayatında son derece hassas dönemlerde başvurulan bir alan olup profesyonel ve deneyimli bir avukat desteği hakların korunması ve sürecin sağlıklı yürütülmesi açısından büyük önem taşır.</p>
                                </>
                            ) : isCeza ? (
                                <>
                                    <p>Ceza yargılamasında etkili savunma, temel hakların korunması ve adil yargılanma açısından kritik önemdedir. Soruşturma ve kovuşturma aşamalarının her birinde stratejik yaklaşım benimsiyoruz.</p>
                                    <h5>Soruşturma Aşaması</h5>
                                    <ul>
                                        <li>Gözaltı ve ifade alma süreçlerinde hakların korunması</li>
                                        <li>Arama, elkoyma ve iletişimin tespiti tedbirlerine itiraz</li>
                                        <li>Delil toplama ve delillerin hukuka aykırılığının ileri sürülmesi</li>
                                    </ul>
                                    <h5>Kovuşturma Aşaması</h5>
                                    <ul>
                                        <li>Esas hakkında savunma ve çapraz sorgu</li>
                                        <li>Bilirkşi ve uzman görüşlerinin değerlendirilmesi</li>
                                        <li>Hükme ve infaza ilişkin itiraz ve temyiz</li>
                                    </ul>
                                    <h5>Tutuklama ve Tedbirler</h5>
                                    <ul>
                                        <li>Tutukluluğa itiraz ve adli kontrol</li>
                                        <li>Yurtdışı çıkış yasağı, yakalama ve zorla getirme</li>
                                    </ul>
                                </>
                            ) : isIs ? (
                                <>
                                    <h5>İŞ VE SOSYAL GÜVENLİK HUKUKU</h5>
                                    <p>Hızla sanayileşen ve üreten bir ülkede, işçi‑işveren arasında hukuksal uyuşmazlıkların olması kaçınılmazdır. İş hukuku alanında uzman Avukat ve danışman kadrosuyla hukuk büromuz bireysel ve kurumsal müvekkillere iş hukukunda yaşanan ve yaşanabilecek uyuşmazlıklarda dava, icra ve danışmanlık desteği vermektedir.</p>

                                    <h5>İŞÇİ VE İŞVEREN ARASINDA YAŞANACAK VE YAŞANAN TÜM UYUŞMAZLIKLARDA MÜVEKKİLERİMİZİN YANINDAYIZ.</h5>
                                    <p>İş Kanunu, Borçlar Kanunu, İşçi Sağlığı ve İş güvenliği mevzuat hükümleri, Yargıtay içtihatları dahil iş hukukunda güncel gelişmeleri iyi takip etmek gerekmektedir. Özellikle işçi‑işveren uyuşmazlıklarında Yargıtay içtihatları çok ayrı bir öneme sahiptir. İş kanununun çizdiği genel çerçeve Yargıtay içtihatları ile doldurulmuştur. İş Kanunu; iş sözleşmesinin kurulması, iş sözleşmenin devamı ve sona erdirilmesi dahil bir çok kanuni düzenlemeyi içermektedir. İşçiler çoğu zaman iş sözleşmesi düzenlenirken işveren ile müzakere yapma imkânları bulunmamaktadır. Bu nedenle işverenler her ne kadar işveren lehine iş sözleşmesi düzenlemiş olsalar bile iş sözleşmelerinin içeriği "iş kanunu dahil diğer işçiyi koruyan mevzuatlar" ile sınırlıdır. Haftalık çalışma süreleri, fazla çalışma sürelerinin sınırı, haftalık çalışma izni dahil işçinin işyerinde çalışma süreleri iş mevzuatında düzenlenmiştir.</p>

                                    <p>Birleşik Avukatlar Bürosu olarak, işçinin işveren karşısında korunması için her türlü hukuki yardımı müvekkillere sunmaktayız. İşçi ile işveren arasında iş sözleşmesinin düzenlenmesi konusunda yeterli bilgi ve tecrübeye sahip bulunmaktayız.</p>

                                    <p>Birleşik Avukatlar Bürosu, işverenlerin işçi ile yapacakları iş sözleşmelerinin düzenlenmesi, iç çalışma kurallarının düzenlenmesi dahil tüm sözleşme ve hukuksal süreçlerde işverenlere hukuki destek sunmaktayız. İşverenin işçinin haklı olarak iş sözleşmesinin feshetmesi, iş sözleşmesini geçerli nedene dayanarak feshetmesi dahil tüm fesih işlemlerinde işverene hukuksal destek sunmaktayız. İşverenin işçi tarafından açılan davalarda davalı olarak vekilliğini üstlenerek haksız olarak yüksek tazminatlara aleyhe hükmedilmemesi için gerekli hukuksal desteği sunmaktayız.</p>

                                    <p>Birleşik Avukatlar Bürosu, işçi sendikalarına her türlü hukuksal konuda dava ve danışmanlık hizmeti sunmaktadır. Toplu iş sözleşmesinin hazırlanması, toplu iş sözleşmesine dayanarak iş sözleşmelerinin düzenlenmesi, toplu iş sözleşmeleri aykırı davranmak nedeniyle işverene karşı davaların açılması, grev ve lokavt konularında işçilere işçi sendikalarında hukuksal destek sunmaktayız. Sendika temsilci ve yöneticilerinin iş mevzuatından kaynaklanan haklarının korunması hukuksal katkıda bulunmaktayız.</p>

                                    <p>Birleşik Avukatlar Bürosu, işçilerin SGK ile karşı karşıya kaldıkları uyuşmazlıklarda hukuki destek sunmaktadır. Geriye yönelik hizmet tespit davalarının açılması, sigorta primlerinin yatırılmaması nedeniyle gerekli hukuksal süreçleri yürütmek, emeklilik konusunda gerekli hukuksal desteği sunmak gibi sosyal güvenlik hukukunu ilgilendiren bir çok konuda aktif rol üstlenmekteyiz.</p>

                                    <p>Birleşik Avukatlar Bürosu, işverenlerin SGK ile karşı karşıya kaldığı cezalara karşı bu cezaların iptalleri için dava ve danışmanlık hizmeti sunmaktayız.</p>

                                    <h5>BİRLEŞİK AVUKATLAR BÜROSU İŞ HUKUKU VE SOSYAL GÜVENLİK HUKUKU ALANINDA;</h5>
                                    <ul>
                                        <li>İşveren ile işçi arasında iş sözleşmesinin düzenlenmesi,</li>
                                        <li>İşverenin işçiyi haklı veya geçerli sebebe dayanarak iş sözleşmesini feshetmesi,</li>
                                        <li>İşçinin işverene karşı açacağı davalarda kıdem tazminatı, ihbar tazminatı, fazla çalışma alacağı (mesai alacağı), fazla süreli çalışma alacağı, asgari geçim indirimi alacağı, hafta tatili, resmi ve dini bayramlarda çalışmadan dolayı alacaklar, yıllık izin alacağı, ücret alacağı dahil tüm alacaklar için talepte bulunmak,</li>
                                        <li>İşçinin haklı olarak iş sözleşmesini feshetmesi için noter yoluyla ihtarname gönderilmesi için ihtarname hazırlamak,</li>
                                        <li>İşveren için iş sözleşmesinin devamı sırasında iş sözleşmesinden kaynaklanan sorunlarda hukuksal destekte bulunmak,</li>
                                        <li>İşçi sendikalarına üyelerinin işverenle karşı karşıya kaldığı hukuksal problemlerde danışmanlık ve dava desteği sunmak,</li>
                                        <li>İş sendikalarının toplu iş sözleşmesi hazırlanması konusunda hukuksal destek sunmak,</li>
                                        <li>Toplu iş sözleşmelerinden kaynaklanan uyuşmazlıklarda işçi ve işveren sendikaları ile işçilere ve işverenlere dava ve danışmanlık hizmeti sunmak,</li>
                                        <li>Grev ve lokavt konusunda her türlü hukuksal desteği sunmak,</li>
                                        <li>İşçilerin sosyal güvenlik kurumları ile yaşadığı emeklilik, hizmet tespit davası, maaş konularında uyuşmazlıklar ile ilgili dava açmak,</li>
                                        <li>İşverenlere sosyal güvenlik kurumu tarafından kesilen haksız cezalara karşı iptal davaları açmak,</li>
                                        <li>İşçi ve işveren arasında yaşanan ve yaşanacak tüm uyuşmazlıklarda dava, icra ve danışmanlık desteği sunmak.</li>
                                    </ul>
                                </>
                            ) : isKira ? (
                                <>
                                    <h5>Kira Hukuku – Profesyonel Hukuki Danışmanlık ve Avukatlık Hizmetleri</h5>
                                    <p>Kira Hukuku, 6098 sayılı Türk Borçlar Kanunu’nda ayrıntılı şekilde düzenlenen ve uygulama alanı oldukça geniş olan bir hukuk dalıdır. Kanunun 299. maddesine göre kira sözleşmesi; kiraya verenin bir malın kullanımını veya kullanım ile birlikte ondan yararlanma hakkını kiracıya bırakması, kiracının ise bu hakkın karşılığı olarak kira bedelini ödemeyi üstlendiği bir sözleşme olarak tanımlanır. Hem kiraya veren hem de kiracı açısından karşılıklı borç ve yükümlülükler doğuran bu sözleşme türü, günlük hayatta en sık karşılaşılan hukuki işlemlerden biridir.</p>
                                    <p>Konut ve çatılı işyeri kiralarının yanı sıra; finansal kiralama, filo kiralama, ürün kirası, hasılat kirası gibi farklı sözleşme türleri de Kira Hukuku kapsamına girmektedir. Hatta uygulamada franchising sözleşmelerinde bile kira hukukuna ilişkin düzenlemeler yer almakta olup, bu alandaki hukuki ihtilafların çeşitliliği giderek artmaktadır.</p>
                                    <p>Kira ilişkilerinin yaygınlığı, beraberinde birçok hukuki uyuşmazlığı da getirmektedir. Kira bedelinin belirlenmesi, kira borcunun ödenmemesi, kiralananın tahliyesi, sözleşmenin feshi, kira bedelinin uyarlanması gibi pek çok konuda taraflar arasında anlaşmazlık doğabilmektedir. Bu nedenle hem kiracılar hem de kiraya verenler açısından uzman bir hukuki destek almak, hak kayıplarının önüne geçilmesi bakımından kritik önem taşır.</p>
                                    <p>Hukuk büromuz, kira hukuku kapsamında yerli ve yabancı gerçek veya tüzel kişilere profesyonel avukatlık ve danışmanlık hizmeti sunmakta; kira ilişkilerinden doğan tüm uyuşmazlıklarda müvekkillerinin haklarını korumaktadır.</p>
                                    <h5>Kira Hukuku Kapsamında Sunduğumuz Hizmetler</h5>
                                    <p>Aşağıda kira hukuku alanında sağladığımız başlıca hizmetler yer almaktadır:</p>
                                    <h5>Tahliye Davaları</h5>
                                    <p>Kiracının kira borcunu ödememesi, sözleşme şartlarına aykırı davranması, ihtiyaç sebebiyle tahliye veya sözleşmenin belirli şartlarla sona ermesi durumlarında tahliye davaları açılmaktadır. Hukuk büromuz:</p>
                                    <ul>
                                        <li>İcra yoluyla tahliye</li>
                                        <li>İhtiyaç sebebiyle tahliye</li>
                                        <li>Yeniden inşa ve imar sebebiyle tahliye</li>
                                        <li>Tahliye taahhüdüne dayalı tahliye</li>
                                    </ul>
                                    <h5>Kira Bedelinin Tespiti Davaları</h5>
                                    <p>Ekonomik koşulların değişmesi, TÜFE oranları veya sözleşmenin niteliği gereği kira bedelinin yeniden belirlenmesi gereken durumlarda kira bedeli tespit davası açılabilmektedir. Büromuz:</p>
                                    <ul>
                                        <li>Konut ve işyeri kira bedelinin tespiti</li>
                                        <li>Rayiç değer analizleri</li>
                                        <li>Uzman bilirkişi raporlarının değerlendirilmesi</li>
                                    </ul>
                                    <h5>Kira Alacaklarının Takibi</h5>
                                    <p>Kiracı tarafından ödenmeyen kira bedellerinin icra takibine konu edilmesi, temerrüt işlemleri, tahliye talepli ilamsız icra takibi gibi süreçler titizlikle yürütülmektedir.</p>
                                    <h5>Kira Sözleşmelerinin Hazırlanması ve İncelenmesi</h5>
                                    <p>Her kira ilişkisi kendi içinde farklı dinamiklere sahip olduğundan, hazır sözleşmeler tarafları çoğu zaman korumaz. Bu nedenle büromuz:</p>
                                    <ul>
                                        <li>Kira sözleşmelerinin hazırlanması</li>
                                        <li>Mevcut sözleşmelerin incelenmesi</li>
                                        <li>Tarafların hak ve yükümlülüklerinin netleştirilmesi</li>
                                        <li>Uyuşmazlıkları önleyici hukuki tedbirlerin belirlenmesi</li>
                                    </ul>
                                    <h5>Kira Bedelinin Uyarlanması Davaları</h5>
                                    <p>Ekonomik koşulların olağanüstü şekilde değiştiği durumlarda, kira bedelinin hakkaniyete uygun şekilde yeniden düzenlenmesi gerekebilir. Bu kapsamda:</p>
                                    <ul>
                                        <li>Uyarlama davalarının açılması</li>
                                        <li>Delillerin ve ekonomik verilerin değerlendirilmesi</li>
                                        <li>Sözleşmenin ayakta tutulmasını sağlayan çözümler üretilmesi</li>
                                    </ul>
                                    <h5>Franchising Sözleşmelerinin Hazırlanması ve İncelenmesi</h5>
                                    <p>Franchise sistemlerinde işyeri kullanımına ilişkin düzenlemeler de kira hukukuyla doğrudan bağlantılıdır. Büromuz, franchising sözleşmelerinin kira hukuku açısından güvenli şekilde oluşturulması ve uygulanması için profesyonel danışmanlık hizmeti vermektedir.</p>
                                </>
                            ) : isIcra ? (
                                <>
                                    <p>İcra‑iflas hukuku alanında alacakların etkin tahsili ve borçlunun haklarının korunması için takip süreçlerini yönetiyoruz.</p>
                                    <h5>Takip Türleri</h5>
                                    <ul>
                                        <li>İlamsız ve ilamlı icra takipleri</li>
                                        <li>Rehnin paraya çevrilmesi ve kambiyo senetlerine mahsus takip</li>
                                    </ul>
                                    <h5>Haciz ve Tasarruf İşlemleri</h5>
                                    <ul>
                                        <li>Menkul‑gayrimenkul haczi ve satış</li>
                                        <li>İstihkak iddiaları ve ihalenin feshi</li>
                                    </ul>
                                    <h5>İtiraz ve Şikayet</h5>
                                    <ul>
                                        <li>Ödeme emrine itiraz ve itirazın kaldırılması</li>
                                        <li>İcra mahkemesi şikayetleri</li>
                                    </ul>
                                </>
                            ) : (
                                <>
                                    <p>Müvekkillerimizin ihtiyaçlarına uygun hukuki çözümler üretiyoruz.</p>
                                </>
                            )}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
