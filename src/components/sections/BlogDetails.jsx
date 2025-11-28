import { Link } from 'react-router-dom';
import featureImg from "@/assets/img/blog/blog-feature-img.jpg";
import blogImg5 from "@/assets/img/blog/5.jpg";
import detailsImg2 from "@/assets/img/blog/blog-details-img-2.jpg";
import recentPost1 from "@/assets/img/blog/recent-post-1.jpg";
import recentPost2 from "@/assets/img/blog/recent-post-2.jpg";
import recentPost3 from "@/assets/img/blog/recent-post-3.jpg";

export default function BlogDetails({ slug }) {
    const isAile = slug === 'aile-hukuku-blog-1';
    const isCeza = slug === 'ceza-hukuku-blog-1';
    const isIs = slug === 'is-hukuku-blog-1';
    const isKira = slug === 'kira-hukuku-blog-1';
    const isTicaret = slug === 'ticaret-hukuku-blog-1';
    const isMedeni = slug === 'medeni-hukuk-blog-1';
    const isHizmet = slug === 'hukuki-hizmet-blog-1';
    const isBuro = slug === 'hukuk-burosu-blog-1';
    const order = ['aile-hukuku-blog-1','ceza-hukuku-blog-1','is-hukuku-blog-1','ticaret-hukuku-blog-1','hukuki-hizmet-blog-1','medeni-hukuk-blog-1','hukuk-burosu-blog-1','kira-hukuku-blog-1'];
    const idx = order.indexOf(slug);
    const prevSlug = idx > 0 ? order[idx - 1] : null;
    const nextSlug = idx !== -1 && idx < order.length - 1 ? order[idx + 1] : null;
    return (
        <div className="blog-details-page section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-12">
                        <div className="blog-feat-img mb-30">
                            <img src={isAile ? blogImg5 : (isKira ? detailsImg2 : featureImg)} alt=""/>
                        </div>
                        <div className="blog-content-wrap">
                            {isAile && (
                                <>
                                    <h3 className="mt-10 mb-20">Trafik Kazası Tazminatları Nelerdir?</h3>
                                    <p><span className="dropcap_style">T</span>rafik kazaları; maddi ve manevi zararlara yol açan ve hukuki süreçleri gerektiren olaylardır. Kaza sonucunda zararların giderilmesi amacıyla maddi ve manevi tazminat talepleri ileri sürülebilir. Taleplerin kapsamı; kazanın niteliği, tarafların kusur durumu ve zarar türüne göre belirlenir.</p>
                                    <h5>Trafik Kazası Tazminatı Nasıl Hesaplanır?</h5>
                                    <p>Hesaplama; objektif kriterlere dayanır. Kazanç kaybı, maluliyet oranı, yaş, meslek, destekten yoksun kalma durumu gibi unsurlar dikkate alınır.</p>
                                    <p>Örnek: 19.200 × 37 = 710.400 TL maddi tazminat.</p>
                                    <h5>Kimler Dava Açabilir?</h5>
                                    <ul>
                                        <li>Yaralanma: Yaralanan kişi maddi ve manevi tazminat talep edebilir.</li>
                                        <li>Ölüm: Destekten yoksun kalan yakınlar destekten yoksun kalma tazminatı talep edebilir.</li>
                                    </ul>
                                    <h5>Dava Kimlere Karşı Açılır?</h5>
                                    <p>Trafik kazaları haksız fiil niteliğindedir. Dava; kazadan sorumlu sürücüye, işletene ve zorunlu trafik sigortacısına karşı açılabilir. Karayolları Trafik Kanunu gereği araç sahibi çoğu durumda işleten sayılır ve tazminat sorumluluğu vardır.</p>
                                    <h5>Tazminata Konu Zararlar</h5>
                                    <ul>
                                        <li>Destekten yoksun kalma</li>
                                        <li>Çalışma gücü kaybı (maluliyet)</li>
                                        <li>Geçici iş göremezlik ve tedavi giderleri</li>
                                        <li>Manevi tazminat</li>
                                    </ul>
                                    <h5>Zamanaşımı</h5>
                                    <p>Trafik kazasına ilişkin tazminat taleplerinde zamanaşımı; KTK ve TBK hükümlerine göre belirlenir.</p>
                                    <ul>
                                        <li>Her hâlükârda kaza tarihinden itibaren 10 yıl.</li>
                                        <li>Ölümlü kaza: 15 yıl.</li>
                                        <li>Yaralamalı kaza: 8 yıl.</li>
                                        <li>Yaralamalı kazalarda; sorumlular geç öğrenilmiş olsa bile 10 yıldan sonra dava açılamaz.</li>
                                    </ul>
                                </>
                            )}
                            {isCeza && (
                                <>
                                    <h3 className="mt-10 mb-20">Avukat Tutma Zorunluluğu ve Ceza Savunmada Temsilin Önemi</h3>
                                    <p><span className="dropcap_style">T</span>ürk hukuk sisteminde bireylerin kendi davalarını bizzat takip etmeleri mümkündür; avukatla temsil her davada zorunlu değildir. Ancak ceza yargılaması teknik bir süreçtir ve hak kaybı ihtimali yüksektir. Soruşturma ve kovuşturma aşamalarında yapılacak bir hata, telafisi güç sonuçlar doğurabilir.</p>
                                    <h5>Ceza Davalarında Avukat Zorunluluğu</h5>
                                    <p>Ceza Muhakemesi Kanunu uyarınca aşağıdaki durumlarda müdafi (avukat) bulundurulması zorunludur:</p>
                                    <ul>
                                        <li>Alt sınırı 5 yıldan fazla hapis cezası öngörülen suçlarda</li>
                                        <li>18 yaşından küçük sanıklarda</li>
                                        <li>Kendini savunamayacak zihinsel veya bedensel engeli bulunan sanıklarda</li>
                                        <li>Tutuklama talebi veya tutukluluk süresinin uzatılmasında</li>
                                    </ul>
                                    <h5>Avukat Tutmanın Sağladığı Avantajlar</h5>
                                    <ul>
                                        <li>Hukuki sürecin doğru yönetilmesi</li>
                                        <li>Delillerin toplanması ve sunumunda profesyonel yaklaşım</li>
                                        <li>Hak kaybına yol açabilecek usul hatalarının önüne geçilmesi</li>
                                        <li>Etkin dava stratejisinin belirlenmesi</li>
                                        <li>Hukuki belgelerin usule uygun hazırlanması</li>
                                    </ul>
                                    <h5>Sonuç</h5>
                                    <p>Ceza yargılamasında avukat desteği; adil yargılanma ve hakların etkin korunması için çoğu zaman belirleyicidir. Özellikle karmaşık ve yüksek risk içeren dosyalarda profesyonel yardım almak en doğru yaklaşımdır.</p>
                                    <h5>Ebru Çulha Hukuk Bürosu Olarak Yanınızdayız</h5>
                                    <p>Ebru Çulha Hukuk Bürosu, soruşturma ve kovuşturma süreçlerinde müdafi olarak profesyonel destek sunar. Detaylı bilgi almak veya randevu oluşturmak için bizimle iletişime geçebilirsiniz.</p>
                                </>
                            )}
                            {isIs && (
                                <>
                                    <p><span className="dropcap_style">İ</span>ş hukuku; işçi‑işveren ilişkilerini düzenler. İş sözleşmeleri, fesih ve tazminat hakları en sık karşılaşılan konulardır.</p>
                                    <h5>Öne Çıkan Başlıklar</h5>
                                    <ul>
                                        <li>İşe iade ve kıdem tazminatı</li>
                                        <li>Fazla mesai ve ücret alacakları</li>
                                        <li>İş kazaları ve sorumluluk</li>
                                    </ul>
                                </>
                            )}
                            {isKira && (
                                <>
                                    <p><span className="dropcap_style">K</span>ira ilişkilerinde sözleşme hükümleri ve TBK hükümleri birlikte değerlendirilir. Tahliye, kira artışı ve alacak uyuşmazlıkları uygulamada sık görülür.</p>
                                    <h5>Kiracı‑Kiraya Veren İlişkisi</h5>
                                    <ul>
                                        <li>Yenileme ve artış koşulları</li>
                                        <li>Tahliye nedenleri</li>
                                        <li>Alacak ve depozito iadesi</li>
                                    </ul>
                                </>
                            )}
                            {isTicaret && (
                                <>
                                    <p><span className="dropcap_style">T</span>icari sözleşmeler hazırlanırken taraf yükümlülükleri, cezai şart ve fesih hükümleri açıkça yazılmalıdır. Uyuşmazlıkların önüne geçmek için risk analizi şarttır.</p>
                                    <h5>Sözleşmede Dikkat Edilecekler</h5>
                                    <ul>
                                        <li>Ödeme ve teslim koşulları</li>
                                        <li>Sorumluluk sınırlamaları</li>
                                        <li>Uyuşmazlık çözüm maddeleri</li>
                                    </ul>
                                </>
                            )}
                            {isMedeni && (
                                <>
                                    <h3 className="mt-10 mb-20">KUSURSUZ SORUMLULUK NEDİR?</h3>
                                    <h5>HUKUKİ SORUMLULUK ÇEŞİTLERİ NELERDİR?</h5>
                                    <p><span className="dropcap_style">H</span>ukuki sorumluluk, kişinin hukuka aykırı bir davranışı sonucunda ortaya çıkan zararı gidermesi yükümlülüğüdür. Türk hukukunda hukuki sorumluluk iki temel kategoriye ayrılmaktadır:</p>
                                    <h6>1) Kusur Sorumluluğu</h6>
                                    <p>Kusur sorumluluğu, haksız fiil kavramına dayanır. Haksız fiil, kişinin kusurlu ve hukuka aykırı bir davranışıyla başkasına zarar vermesi hâlidir.</p>
                                    <p><b>TBK m. 49:</b> “Kusurlu ve hukuka aykırı bir fiille başkasına zarar veren, bu zararı gidermekle yükümlüdür.”</p>
                                    <p>Kusur sorumluluğunun doğması için; hukuka aykırılık, zarar, uygun nedensellik bağı ve kusur unsurlarının bulunması gerekir.</p>
                                    <h6>2) Kusursuz Sorumluluk (Objektif Sorumluluk)</h6>
                                    <p>Kusursuz sorumlulukta kişi, kusuru olmasa bile, zarar ile zarar verici olay arasında uygun nedensellik bağı bulunduğu için sorumlu tutulur. Bu sorumluluk türü, çoğunlukla başkalarının davranışlarından veya tehlikeli faaliyetlerden doğan zararlara ilişkindir.</p>
                                    <p>Kusursuz sorumluluk hâlleri, Türk Borçlar Kanunu’nun 65-71. maddeleri arasında düzenlenmiştir.</p>
                                    <p>Kusursuz sorumluluk üç başlık altında incelenir: hakkaniyet sorumluluğu, özen sorumluluğu ve tehlike sorumluluğu.</p>
                                    <h5>I. HAKKANİYET SORUMLULUĞU</h5>
                                    <p>Hakkaniyet sorumluluğu, zarar veren kusurlu olmasa bile adalet ve hakkaniyet gereği tazmin yükümlülüğü doğuran bir kusursuz sorumluluk türüdür.</p>
                                    <p><b>TBK m. 65</b> temel düzenlemedir.</p>
                                    <h6>A) Temyiz Kudretine Sahip Olmayan Kişilerin Sorumluluğu</h6>
                                    <p>Temyiz kudreti olmayan kişiler kusurlu sayılamayacağından klasik anlamda haksız fiilden sorumlu tutulamazlar. Ancak:</p>
                                    <p><b>TBK m. 65:</b> “Hakkaniyet gerektiriyorsa; hâkim, ayırt etme gücü bulunmayan kişinin verdiği zararın tamamen veya kısmen giderilmesine karar verebilir.”</p>
                                    <p>Uygulama şartları: zarar ile fiil arasında uygun nedensellik bağı; zarar temyiz kudreti olmayan kişinin fiilinden doğmuş olmalı; temyiz gücü olsaydı fiil haksız fiil teşkil edecek nitelikte olmalı; hakkaniyet tazmini gerektirmeli.</p>
                                    <h5>II. ÖZEN SORUMLULUĞU</h5>
                                    <p>Özen sorumluluğu, bazı kişilerin kanunda öngörülen gözetim ve özen yükümlülüğünü ihlali sebebiyle kusuru olmasa dahi sorumlu tutulmasını sağlayan kusursuz sorumluluk türüdür.</p>
                                    <h6>A) Adam Çalıştıranın Sorumluluğu (TBK m. 66)</h6>
                                    <p>Çalıştırdığı kişilerin işlerini yaparken üçüncü kişilere verdikleri zararlardan adam çalıştıran, kusuru aranmaksızın sorumludur.</p>
                                    <p>Şartlar: emir–talimat ilişkisi; zarar işin ifası sırasında; uygun nedensellik bağı; kurtuluş kanıtının olmaması. Kurtuluş kanıtı: seçmede özen, talimat ve gözetim, örgütlenmenin zararı önlemeye elverişli olması. Ödeme sonrası kusurlu çalışana rücu mümkündür.</p>
                                    <h6>B) Hayvan Bulunduranın Sorumluluğu (TBK m. 67-68)</h6>
                                    <p>Bir hayvanın bakımını veya yönetimini üstlenen kişi, hayvanın hareketi sonucu doğan zararlardan kusuru aranmaksızın sorumludur. Gerekli özeni ispat ederse sorumluluktan kurtulabilir. TBK m.68, taşınmazda verilen zararlara ilişkin zilyede yetkiler tanır.</p>
                                    <h6>C) Yapı Malikinin Sorumluluğu (TBK m. 69)</h6>
                                    <p>Yapı malikinin, binanın veya yapı eserinin yapımındaki bozukluklardan veya bakımındaki eksikliklerden doğan zararlardan kusursuz sorumluluğu vardır. Malik ile birlikte bazı hak sahipleri ve fiilen kullananlar da sorumlu olabilir; malik rücu edebilir.</p>
                                    <h5>III. TEHLİKE SORUMLULUĞU (TBK m. 71)</h5>
                                    <p>Önemli ölçüde tehlike arz eden işletmelerin faaliyetinden doğan zararlarda uygulanan ağır bir kusursuz sorumluluk türüdür. Kurtuluş kanıtı çoğu zaman mümkün değildir; faaliyet izinli olsa bile sorumluluk doğar. Nimet–külfet dengesi gereği topluma verilen zararın karşılanması gerekir.</p>
                                    <p>Şartlar: zarar tehlikeli işletmenin tipik faaliyeti nedeniyle doğmalı; faaliyet uzman kişi tüm özeni gösterse bile sıkça veya ağır zararlara yol açabilir nitelikte olmalı; kanunda açıkça öngörülen işletmeler de kapsamdadır. Zarardan işletme sahibi ve varsa işleten müteselsilen sorumludur.</p>
                                    <h5>Hukuki Destek İçin</h5>
                                    <p>Kusursuz sorumluluk, hukuki sorumluluğun en teknik alanlarından biridir ve çoğu zaman profesyonel hukuki değerlendirme gerektirir. Ebru Çulha Hukuk Bürosu olarak, borçlar hukuku ve sorumluluk hukuku alanındaki uzmanlığımızla danışmanlık ve dava süreçlerinde profesyonel destek sunmaktayız. Sorularınız ve hukuki ihtiyaçlarınız için <Link to="/contact">bizimle iletişime geçebilirsiniz</Link>.</p>
                                </>
                            )}
                            {isHizmet && (
                                <>
                                    <h3 className="mt-10 mb-20">CUMHURBAŞKANINA HAKARET SUÇU (TCK M.299)</h3>
                                    <h5>Cumhurbaşkanına Hakaret Suçu Nedir? (TCK 299)</h5>
                                    <p><span className="dropcap_style">C</span>umhurbaşkanına hakaret suçu, genel hakaret suçundan farklı olarak 5237 sayılı Türk Ceza Kanunu’nun 299. maddesinde özel bir düzenleme şeklinde yer almaktadır. Bu suç ile amaçlanan; toplumdaki saygınlık ve makamın temsil ettiği devlet otoritesine yönelik değerlerin korunmasıdır. Düzenleme, Cumhurbaşkanlığı makamının fonksiyonlarını değil, hukuki bir kavram olarak Cumhurbaşkanının şeref ve saygınlığını korumayı hedeflemektedir.</p>
                                    <p>Uygulamada ise, eleştiri niteliğinde olan bazı söz ve davranışların da hakaret kapsamında değerlendirilmesi nedeniyle, bu düzenlemenin zaman zaman ifade özgürlüğüyle çatıştığı yönünde eleştiriler bulunmaktadır.</p>
                                    <p>Bu suçla ilgili kovuşturma yapılması Adalet Bakanlığı’nın iznine tabidir.</p>
                                    <h5>Cumhurbaşkanına Hakaret Suçunun Unsurları</h5>
                                    <ul>
                                        <li>Suç, “kişilere karşı suçlar” bölümünde değil, Devlete karşı suçlar bölümünde yer alır.</li>
                                        <li>Mağdur gerçek kişi olsa da korunan hukuki yarar devletin siyasi yapısı ve otoritesidir.</li>
                                        <li>Fail herkes olabilir.</li>
                                        <li>Suçun, kişinin Cumhurbaşkanlığı görevini yürüttüğü süre içinde işlenmiş olması gerekir.</li>
                                        <li>Hakaret, kişinin onur, şeref ve saygınlığını zedeleyebilecek fiil isnadı veya sövme yoluyla gerçekleşebilir.</li>
                                        <li>Hakaret hem yüz yüze hem yoklukta işlenebilir.</li>
                                        <li>Gıyapta hakarette genel hakaret suçundan farklı olarak en az üç kişi tarafından duyulma şartı aranmaz. Bir kişinin duyması yeterlidir.</li>
                                        <li>Suç, sözle, yazıyla, sosyal medya paylaşımlarıyla, çizimlerle, hareketlerle veya iletişim araçlarıyla işlenebilir.</li>
                                        <li>Manevi unsur kasttır; fail mağdurun sıfatını bilerek hakaret etmelidir.</li>
                                    </ul>
                                    <h5>Eleştiri – Hakaret Ayrımı</h5>
                                    <p>Cumhurbaşkanına veya herhangi bir kamu görevlisine yönelik eleştiri, demokratik toplumun temel unsurlarından biridir ve ifade özgürlüğü kapsamında korunur.</p>
                                    <p>Ancak:</p>
                                    <ul>
                                        <li>Küfür</li>
                                        <li>Aşağılama</li>
                                        <li>Onur ve saygınlığı hedef alan sözler</li>
                                        <li>İftira niteliğinde isnatlar</li>
                                    </ul>
                                    <p>eleştiri kapsamında değerlendirilmez ve suç sayılır. Siyasilerin ve kamuya mal olmuş kişilerin sert eleştirilere daha fazla katlanmak zorunda oldukları kabul edilse de bu durum hakareti meşru kılmaz.</p>
                                    <h5>Cumhurbaşkanına Hakaret Suçunun Cezası</h5>
                                    <ul>
                                        <li>TCK 299’a göre 1 yıldan 4 yıla kadar hapis cezası öngörülmüştür.</li>
                                        <li>Suçun alenen işlenmesi hâlinde ceza altıda bir oranında artırılır.</li>
                                        <li>Kovuşturma için Adalet Bakanlığı’nın izni gereklidir.</li>
                                    </ul>
                                    <p>Bu suç kapsamında verilen hapis cezaları; hükmün açıklanmasının geri bırakılması (HAGB), adli para cezasına çevrilme veya cezanın ertelenmesi gibi alternatif yaptırımlara konu olabilir.</p>
                                    <h5>Cumhurbaşkanına Hakaret Suçunda Aleniyet</h5>
                                    <p>Suçun alenen işlenmesi (örneğin televizyon programı, sosyal medya paylaşımı, miting konuşması gibi durumlarda) cezanın artırılmasına neden olur. Dijital platformlarda yapılan açıklamalar da aleniyet kapsamındadır.</p>
                                    <h5>Cumhurbaşkanına Gıyapta Hakaret</h5>
                                    <ul>
                                        <li>Genel hakaret suçundan farklı olarak en az üç kişinin duyması şartı aranmaz.</li>
                                        <li>Hakaret niteliğindeki sözlerin bir kişi tarafından duyulması yeterlidir.</li>
                                    </ul>
                                    <h5>Şikâyet Süresi, Zamanaşımı, Uzlaşma</h5>
                                    <ul>
                                        <li>Suç şikâyete tabi değildir.</li>
                                        <li>Dava zamanaşımı süresi 8 yıldır.</li>
                                        <li>Uzlaşma uygulanamaz.</li>
                                        <li>Yargılama, asliye ceza mahkemelerinde yapılır.</li>
                                    </ul>
                                    <h5>HAGB, Adli Para Cezası ve Cezanın Ertelenmesi</h5>
                                    <p>Bu suçtan dolayı verilen hapis cezalarında; hükmün açıklanmasının geri bırakılması (HAGB), adli para cezasına çevrilme ve cezanın ertelenmesi mümkündür. Bu nedenle süreç, ceza hukuku konusunda uzman bir avukat tarafından takip edilmelidir.</p>
                                    <h5>Hukuki Destek İçin</h5>
                                    <p>Cumhurbaşkanına hakaret suçu oldukça ciddi sonuçlar doğurabilen ve hassasiyetle yürütülmesi gereken bir yargılama sürecidir. Ebru Çulha Hukuk Bürosu olarak, ceza hukuku alanındaki uzmanlığımızla müvekkillerimize profesyonel hukuki destek sağlamaktayız. Bu konuda bilgi almak veya danışmanlık hizmeti talep etmek için bizimle iletişime geçebilirsiniz.</p>
                                </>
                            )}
                            {isBuro && (
                                <>
                                    <p><span className="dropcap_style">D</span>oğru hukuk bürosunu seçmek için deneyim, uzmanlık alanı ve iletişim netliği temel kıstaslar olmalıdır.</p>
                                    <ul>
                                        <li>Uzmanlık ve referanslar</li>
                                        <li>Şeffaf ücret politikası</li>
                                        <li>İletişim ve geri bildirim</li>
                                    </ul>
                                </>
                            )}
                            
                            
                            <div className="row border-top border-bottom pt-30 pb-30 mt-30 mb-30">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="blog-tag-wrap d-flex align-items-center">
                                        <h5>Etiketler:</h5>
                                        {isAile && (
                                            <>
                                                <span>Trafik Kazası</span>
                                                <span>Tazminat</span>
                                            </>
                                        )}
                                        {isMedeni && (
                                            <>
                                                <span>Kusursuz Sorumluluk</span>
                                                <span>Borçlar Hukuku</span>
                                            </>
                                        )}
                                        {isCeza && (
                                            <>
                                                <span>Ceza Hukuku</span>
                                                <span>Müdafi</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                                
                            </div>
                            <div className="pagination-wrap">
                                {prevSlug && (
                                    <Link to={`/yazilar/${prevSlug}`}><i className="las la-long-arrow-alt-left"></i>Önceki Yazı</Link>
                                )}
                                {nextSlug && (
                                    <Link to={`/yazilar/${nextSlug}`}>Sonraki Yazı<i className="las la-long-arrow-alt-right"></i></Link>
                                )}
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-xl-4 col-lg-4 col-12">
                        <div className="blog-sidebar">
                            
                            <div className="blog-category">
                                <h5>Kategoriler</h5>
                                <ul>
                                    {isMedeni && (
                                        <>
                                            <li><i className="las la-angle-double-right"></i><Link to="/yazilar">Medeni Hukuk</Link></li>
                                            <li><i className="las la-angle-double-right"></i><Link to="/yazilar">Borçlar Hukuku</Link></li>
                                            <li><i className="las la-angle-double-right"></i><Link to="/yazilar">Sorumluluk Hukuku</Link></li>
                                        </>
                                    )}
                                    {isCeza && (
                                        <>
                                            <li><i className="las la-angle-double-right"></i><Link to="/yazilar">Ceza Hukuku</Link></li>
                                            <li><i className="las la-angle-double-right"></i><Link to="/yazilar">TCK 299</Link></li>
                                            <li><i className="las la-angle-double-right"></i><Link to="/yazilar">İfade Özgürlüğü</Link></li>
                                        </>
                                    )}
                                    {isHizmet && (
                                        <>
                                            <li><i className="las la-angle-double-right"></i><Link to="/yazilar">Ceza Hukuku</Link></li>
                                            <li><i className="las la-angle-double-right"></i><Link to="/yazilar">TCK 299</Link></li>
                                            <li><i className="las la-angle-double-right"></i><Link to="/yazilar">Yargılama</Link></li>
                                        </>
                                    )}
                                    {isAile && (
                                        <>
                                            <li><i className="las la-angle-double-right"></i><Link to="/yazilar">Trafik Hukuku</Link></li>
                                            <li><i className="las la-angle-double-right"></i><Link to="/yazilar">Tazminat</Link></li>
                                            <li><i className="las la-angle-double-right"></i><Link to="/yazilar">KTK</Link></li>
                                        </>
                                    )}
                                </ul>
                            </div>
                            <div className="recent-post-wrap">
                                <h5>Son Gönderiler</h5>
                                <div className="single-recent-post">
                                    <div className="recent-post-thumbs">
                                        <img src={recentPost1} alt=""/>
                                    </div>
                                    <div className="recent-post-content">
                                        <p>28 Şubat 2024</p>
                                        <Link to="/yazilar/ceza-hukuku-blog-1">
                                            <h6>Avukat Tutma Zorunluluğu ve Ceza Savunmada Temsilin Önemi</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div className="single-recent-post">
                                    <div className="recent-post-thumbs">
                                        <img src={recentPost2} alt=""/>
                                    </div>
                                    <div className="recent-post-content">
                                        <p>15 Şubat 2024</p>
                                        <Link to="/yazilar/hukuki-hizmet-blog-1">
                                            <h6>CUMHURBAŞKANINA HAKARET SUÇU (TCK M.299)</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div className="single-recent-post">
                                    <div className="recent-post-thumbs">
                                        <img src={recentPost3} alt=""/>
                                    </div>
                                    <div className="recent-post-content">
                                        <p>05 Şubat 2024</p>
                                        <Link to="/yazilar/medeni-hukuk-blog-1">
                                            <h6>Kusursuz Sorumluluk Nedir?</h6>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="popular-tag-wrap">
                                <h5>Popüler Etiket</h5>
                                {isMedeni && (
                                    <>
                                        <span>Kusursuz Sorumluluk</span>
                                        <span>Borçlar Hukuku</span>
                                        <span>Haksız Fiil</span>
                                    </>
                                )}
                                {isCeza && (
                                    <>
                                        <span>Ceza Hukuku</span>
                                        <span>TCK 299</span>
                                        <span>İfade Özgürlüğü</span>
                                    </>
                                )}
                                {isHizmet && (
                                    <>
                                        <span>Ceza Hukuku</span>
                                        <span>Yargılama</span>
                                        <span>Müdafi</span>
                                    </>
                                )}
                                {isAile && (
                                    <>
                                        <span>Trafik Hukuku</span>
                                        <span>Tazminat</span>
                                        <span>KTK</span>
                                    </>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
