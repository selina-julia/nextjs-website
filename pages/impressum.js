import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Impressum() {
    return (
        <Layout impressum>

            <h1 className="adsimple-221146326">Impressum</h1>
            <p className="adsimple-221146326">Informationspflicht laut §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch,
                §63 Gewerbeordnung und Offenlegungspflicht laut §25 Mediengesetz.</p>
            <p className="adsimple-221146326">
                <p>Selina Julia Schindlauer</p>
                <p className="adsimple-221146326">Carl-Häuplweg 8, <br/>4863 Seewalchen am Attersee, <br/>Österreich</p>
                <p className="adsimple-221146326">
                    <strong>Tel.:</strong> 06605475709<br/>
                    <strong>E-Mail:</strong> <a
                    href="mailto:selinaschindlauer@gmail.com">selinaschindlauer@gmail.com</a>
                </p>
                <p>Quelle: Erstellt mit dem <a
                    title="Impressum Generator von firmenwebseiten.at"
                    href="https://www.firmenwebseiten.at/impressum-generator/" target="_blank" rel="follow">Impressum
                    Generator</a> von firmenwebseiten.at</p>
                <h2 className="adsimple-221146326">Urheberrechtshinweis</h2>
                <p>Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht. Falls
                    notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich
                    verfolgen.</p>
                <h2 className="adsimple-221146326">EU-Streitschlichtung</h2>
                <p>Gemäß Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten (ODR-Verordnung) möchten
                    wir Sie über die Online-Streitbeilegungsplattform (OS-Plattform) informieren.<br/>
                    Verbraucher haben die Möglichkeit, Beschwerden an die Online Streitbeilegungsplattform der
                    Europäischen Kommission unter <a className="adsimple-221146326"
                                                     href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE"
                                                     target="_blank" rel="noopener noreferrer nofollow"
                                                     className="external">http://ec.europa.eu/odr?tid=221146326</a> zu
                    richten. Die dafür notwendigen Kontaktdaten finden Sie oberhalb in unserem Impressum.</p>
                <p>Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder verpflichtet sind, an
                    Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                <h2 className="adsimple-221146326">Bildernachweis</h2>
                <p>Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich geschützt.</p>
                <p>Die Bilderrechte liegen bei den folgenden Fotografen und Unternehmen:</p>
                <ul className="adsimple-221146326">
                    <li className="adsimple-221146326">Fotograf Mustermann</li>
                </ul>
                <h2 className="adsimple-221146326">Haftung für Inhalte dieser Website</h2>
                <p>Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen uns korrekte und aktuelle
                    Informationen bereitzustellen. Leider können wir keine Haftung für die Korrektheit aller Inhalte auf
                    dieser Website übernehmen, speziell für jene, die seitens Dritter bereitgestellt wurden. Als
                    Diensteanbieter sind wir nicht verpflichtet, die von ihnen übermittelten oder gespeicherten
                    Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                    hinweisen.</p>
                <p>Unsere Verpflichtungen zur Entfernung von Informationen oder zur Sperrung der Nutzung von
                    Informationen nach den allgemeinen Gesetzen aufgrund von gerichtlichen oder behördlichen Anordnungen
                    bleiben auch im Falle unserer Nichtverantwortlichkeit davon unberührt.</p>
                <p>Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitte wir Sie uns umgehend zu
                    kontaktieren, damit wir die rechtswidrigen Inhalte entfernen können. Sie finden die Kontaktdaten im
                    Impressum.</p>
                <h2 className="adsimple-221146326">Haftung für Links auf dieser Webseite</h2>
                <p>Unsere Webseite enthält Links zu anderen Webseiten für deren Inhalt wir nicht verantwortlich sind.
                    Haftung für verlinkte Websites besteht für uns nicht, da wir keine Kenntnis rechtswidriger
                    Tätigkeiten hatten und haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen sind und
                    wir Links sofort entfernen würden, wenn uns Rechtswidrigkeiten bekannt werden.</p>
                <p>Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitte wir Sie uns zu kontaktieren. Sie
                    finden die Kontaktdaten im Impressum.</p>
                <h1 className="adsimple-221146326">Datenschutzerklärung</h1>
                <h2 className="adsimple-221146326">Sicherheit der Datenverarbeitung</h2>
                <p>Um personenbezogene Daten zu schützen, haben wir sowohl technische als auch organisatorische
                    Maßnahmen umgesetzt. Wo es uns möglich ist, verschlüsseln oder pseudonymisieren wir personenbezogene
                    Daten. Dadurch machen wir es im Rahmen unserer Möglichkeiten so schwer wie möglich, dass Dritte aus
                    unseren Daten auf persönliche Informationen schließen können.</p>
                <p>Art. 25 DSGVO spricht hier von “Datenschutz durch Technikgestaltung und durch datenschutzfreundliche
                    Voreinstellungen” und meint damit, dass man sowohl bei Software (z. B. Formularen) also auch
                    Hardware (z. B. Zugang zum Serverraum) immer an Sicherheit denkt und entsprechende Maßnahmen setzt.
                    Im Folgenden gehen wir, falls erforderlich, noch auf konkrete Maßnahmen ein.</p>
                <h2 className="adsimple-221146326">Eingebettete Social Media Elemente Datenschutzerklärung</h2>
                <p>Wir binden auf unserer Webseite Elemente von Social Media Diensten ein um Bilder, Videos und Texte
                    anzuzeigen.<br/>
                    Durch den Besuch von Seiten die diese Elemente darstellen, werden Daten von Ihrem Browser zum
                    jeweiligen Social Media Dienst übertragen und dort gespeichert. Wir haben keinen Zugriff auf diese
                    Daten.<br/>
                    Die folgenden Links führen Sie zu den Seiten der jeweiligen Social Media Dienste wo erklärt wird,
                    wie diese mit Ihren Daten umgehen:</p>
                <ul className="adsimple-221146326">
                    <li className="adsimple-221146326">Instagram-Datenschutzrichtlinie: <a
                        className="adsimple-221146326" href="https://help.instagram.com/519522125107875?tid=221146326"
                        target="_blank" rel="noopener nofollow"
                        className="external">https://help.instagram.com/519522125107875</a>
                    </li>
                    <li className="adsimple-221146326">Für YouTube gilt die Google Datenschutzerklärung: <a
                        className="adsimple-221146326" href="https://policies.google.com/privacy?hl=de&tid=221146326"
                        target="_blank" rel="noopener nofollow"
                        className="external">https://policies.google.com/privacy?hl=de</a>
                    </li>
                    <li className="adsimple-221146326">Facebook-Datenrichtline: <a className="adsimple-221146326"
                                                                                   href="https://www.facebook.com/about/privacy?tid=221146326"
                                                                                   target="_blank"
                                                                                   rel="noopener nofollow"
                                                                                   className="external">https://www.facebook.com/about/privacy</a>
                    </li>
                    <li className="adsimple-221146326">Twitter Datenschutzrichtlinie: <a className="adsimple-221146326"
                                                                                         href="https://twitter.com/de/privacy?tid=221146326"
                                                                                         target="_blank"
                                                                                         rel="noopener nofollow"
                                                                                         className="external">https://twitter.com/de/privacy</a>
                    </li>
                </ul>
                <h2 className="adsimple-221146326">LinkedIn Datenschutzerklärung</h2>

                <h3 className="adsimple-221146326">Was ist LinkedIn?</h3>
                <p>Wir nutzen auf unserer Webseite Social-Plug-ins des Social-Media-Netzwerks LinkedIn, der Firma
                    LinkedIn Corporation, 2029 Stierlin Court, Mountain View, CA 94043, USA. Bei den Social-Plug-ins
                    kann es sich um Feeds, das Teilen von Inhalten oder um die Verlinkung zu unserer LinkedIn-Seite
                    handeln. Die Social-Plug-ins sind eindeutig mit dem bekannten LinkedIn-Logo gekennzeichnet und
                    erlauben beispielsweise interessante Inhalte direkt über unsere Webseite zu teilen. Für den
                    Europäischen Wirtschaftsraum und die Schweiz ist die Firma LinkedIn Ireland Unlimited Company Wilton
                    Place in Dublin für die Datenverarbeitung verantwortlich.</p>
                <p>Durch die Einbettung solcher Plug-ins können Daten an LinkedIn versandt, gespeichert und dort
                    verarbeitet werden. In dieser Datenschutzerklärung wollen wir Sie informieren, um welche Daten es
                    sich handelt, wie das Netzwerk diese Daten verwendet und wie Sie die Datenspeicherung verwalten bzw.
                    unterbinden können.</p>
                <p>LinkedIn ist das größte soziale Netzwerk für Geschäftskontakte. Anders als beispielsweise bei
                    Facebook konzentriert sich das Unternehmen ausschließlich auf den Aufbau geschäftlicher Kontakte.
                    Unternehmen können auf der Plattform Dienstleistungen und Produkte vorstellen und
                    Geschäftsbeziehungen knüpfen. Viele Menschen verwenden LinkedIn auch für die Jobsuche oder um selbst
                    geeignete Mitarbeiter oder Mitarbeiterinnen für die eigene Firma zu finden. Allein in Deutschland
                    zählt das Netzwerk über 11 Millionen Mitglieder. In Österreich sind es etwa 1,3 Millionen.</p>
                <h3 className="adsimple-221146326">Warum verwenden wir LinkedIn auf unserer Website?</h3>
                <p>Wir wissen wie beschäftigt Sie sind. Da kann man nicht alle Social-Media-Kanäle einzeln verfolgen.
                    Auch wenn es sich, wie in unserem Fall, lohnen würde. Denn immer wieder posten wir interessante News
                    oder Berichte, die es wert sind, verbreitet zu werden. Darum haben wir auf unserer Webseite die
                    Möglichkeit geschaffen, interessante Inhalte direkt auf LinkedIn zu teilen bzw. direkt auf unsere
                    LinkedIn-Seite zu verweisen. Wir betrachten eingebaute Social-Plug-ins als erweiterten Service auf
                    unserer Webseite. Die Daten, die LinkedIn sammelt, helfen uns zudem mögliche Werbemaßnahmen nur
                    Menschen zu zeigen, die sich für unser Angebot interessieren.</p>
                <h3 className="adsimple-221146326">Welche Daten werden von LinkedIn gespeichert?</h3>
                <p>Nur durch die bloße Einbindung der Social-Plug-ins speichert LinkedIn keine persönlichen Daten.
                    LinkedIn nennt diese Daten, die durch Plug-ins generiert werden, passive Impressionen. Wenn Sie aber
                    auf ein Social-Plug-in klicken, um beispielsweise unsere Inhalte zu teilen, speichert die Plattform
                    personenbezogene Daten als sogenannte „aktive Impressionen“. Und zwar unabhängig, ob Sie ein
                    LinkedIn-Konto haben oder nicht. Falls Sie angemeldet sind, werden die erhobenen Daten Ihrem Konto
                    zugeordnet.</p>
                <p>Ihr Browser stellt eine direkte Verbindung zu den Servern von LinkedIn her, wenn Sie mit unseren
                    Plug-ins interagieren. So protokolliert das Unternehmen verschiedene Nutzungsdaten. Neben Ihrer
                    IP-Adresse können das beispielsweise Anmeldungsdaten, Gerätinformationen oder Infos über Ihren
                    Internet- bzw. Mobilfunkanbieter sein. Wenn Sie LinkedIn-Dienste über Ihr Smartphone aufrufen, kann
                    auch Ihr Standort (nachdem Sie das erlaubt haben) ermittelt werden. LinkedIn kann diese Daten in
                    „gehashter“ Form auch an dritte Werbetreibende weitergeben. Hashing bedeutet, dass ein Datensatz in
                    eine Zeichenkette verwandelt wird. Dadurch kann man die Daten so verschlüsseln, dass Personen nicht
                    mehr identifiziert werden können.</p>
                <p>Die meisten Daten zu Ihrem Userverhalten werden in Cookies gespeichert. Das sind kleine Text-Dateien,
                    die meist in Ihrem Browser gesetzt werden. Weiters kann LinkedIn aber auch Web Beacons, Pixel-Tags,
                    Anzeige-Tags und andere Geräteerkennungen benutzen.</p>
                <p>Diverse Tests zeigen auch welche Cookies gesetzt werden, wenn ein User mit einem Social-Plug-in
                    interagiert. Die gefundenen Daten können keinen Vollständigkeitsanspruch erheben und dienen
                    lediglich als Beispiel. Die folgenden Cookies wurden gesetzt, ohne bei LinkedIn angemeldet zu
                    sein:</p>
                <p>
                    <strong className="adsimple-221146326">Name:</strong> bcookie<br/>
                    <strong
                        className="adsimple-221146326">Wert:</strong> =2&34aab2aa-2ae1-4d2a-8baf-c2e2d7235c16221146326-<br/>
                    <strong className="adsimple-221146326">Verwendungszweck:</strong> Das Cookie ist ein sogenanntes
                    „Browser-ID-Cookie“ und speichert folglich Ihre Identifikationsnummer (ID).<br/>
                    <strong className="adsimple-221146326">Ablaufdatum:</strong> Nach 2 Jahren</p>
                <p>
                    <strong className="adsimple-221146326">Name:</strong> lang<br/>
                    <strong className="adsimple-221146326">Wert:</strong> v=2&lang=de-de<br/>
                    <strong className="adsimple-221146326">Verwendungszweck:</strong> Dieses Cookie speichert Ihre
                    voreingestellte bzw. bevorzugte Sprache.<br/>
                    <strong className="adsimple-221146326">Ablaufdatum:</strong> nach Sitzungsende</p>
                <p>
                    <strong className="adsimple-221146326">Name:</strong> lidc<br/>
                    <strong
                        className="adsimple-221146326">Wert:</strong> 1818367:t=1571904767:s=AQF6KNnJ0G221146326…<br/>
                    <strong className="adsimple-221146326">Verwendungszweck:</strong> Dieses Cookie wird zum Routing
                    verwendet. Routing zeichnet die Wege auf, wie Sie zu LinkedIn gekommen sind und wie Sie dort durch
                    die Webseite navigieren.<br/>
                    <strong className="adsimple-221146326">Ablaufdatum:</strong> nach 24 Stunden</p>
                <p>
                    <strong className="adsimple-221146326">Name:</strong> rtc<br/>
                    <strong className="adsimple-221146326">Wert:</strong> kt0lrv3NF3x3t6xvDgGrZGDKkX<br/>
                    <strong className="adsimple-221146326">Verwendungszweck:</strong> Zu diesem Cookie konnten keine
                    näheren Informationen in Erfahrung gebracht werden.<br/>
                    <strong className="adsimple-221146326">Ablaufdatum:</strong> nach 2 Minuten</p>
                <p>
                    <strong className="adsimple-221146326">Name:</strong> JSESSIONID<br/>
                    <strong className="adsimple-221146326">Wert:</strong> ajax:2211463262900777718326218137<br/>
                    <strong className="adsimple-221146326">Verwendungszweck:</strong> Es handelt sich hier um ein
                    Session-Cookie, das LinkedIn verwendet, um anonyme Benutzersitzungen durch den Server aufrecht zu
                    erhalten.<br/>
                    <strong className="adsimple-221146326">Ablaufdatum:</strong> nach Sitzungsende</p>
                <p>
                    <strong className="adsimple-221146326">Name:</strong> bscookie<br/>
                    <strong className="adsimple-221146326">Wert:</strong> “v=1&201910230812…<br/>
                    <strong className="adsimple-221146326">Verwendungszweck:</strong> Bei diesem Cookie handelt es sich
                    um ein Sicherheits-Cookie. LinkedIn beschreibt es als Secure-Browser-ID-Cookie.<br/>
                    <strong className="adsimple-221146326">Ablaufdatum:</strong> nach 2 Jahren</p>
                <p>
                    <strong className="adsimple-221146326">Name:</strong> fid<br/>
                    <strong className="adsimple-221146326">Wert:</strong> AQHj7Ii23ZBcqAAAA…<br/>
                    <strong className="adsimple-221146326">Verwendungszweck:</strong> Zu diesem Cookie konnten keine
                    näheren Informationen gefunden werden.<br/>
                    <strong className="adsimple-221146326">Ablaufdatum:</strong> nach 7 Tagen</p>
                <p>
                    <strong className="adsimple-221146326">Anmerkung:</strong> LinkedIn arbeitet auch mit Drittanbietern
                    zusammen. Darum haben wir bei unserem Test auch die beiden Google-Analytics-Cookies _ga und _gat
                    erkannt.</p>
                <h3 className="adsimple-221146326">Wie lange und wo werden die Daten gespeichert?</h3>
                <p>Grundsätzlich behaltet LinkedIn Ihre personenbezogenen Daten so lange, wie es das Unternehmen als
                    nötig betrachtet, um die eigenen Dienste anzubieten. LinkedIn löscht aber Ihre personenbezogenen
                    Daten, wenn Sie Ihr Konto löschen. In manchen Ausnahmefällen behaltet LinkedIn selbst nach Ihrer
                    Kontolöschung einige Daten in zusammengefasster und anonymisierter Form. Sobald Sie Ihr Konto
                    löschen, können andere Personen Ihre Daten innerhalb von einem Tag nicht mehr sehen. LinkedIn löscht
                    die Daten grundsätzlich innerhalb von 30 Tagen. LinkedIn behält allerdings Daten, wenn es aus
                    rechtlicher Pflicht notwendig ist. Daten, die keinen Personen mehr zugeordnet werden können, bleiben
                    auch nach Schließung des Kontos gespeichert. Die Daten werden auf verschiedenen Servern in Amerika
                    und vermutlich auch in Europa gespeichert.</p>
                <h3 className="adsimple-221146326">Wie kann ich meine Daten löschen bzw. die Datenspeicherung
                    verhindern?</h3>
                <p>Sie haben jederzeit das Recht auf Ihre personenbezogenen Daten zuzugreifen und sie auch zu löschen.
                    In Ihrem LinkedIn-Konto können Sie Ihre Daten verwalten, ändern und löschen. Zudem können Sie von
                    LinkedIn auch eine Kopie Ihrer personenbezogenen Daten anfordern.</p>
                <p>So greifen Sie auf die Kontodaten in Ihrem LinkedIn-Profil zu:</p>
                <p>Klicken Sie in LinkedIn auf Ihr Profilsymbol und wählen Sie die Rubrik „Einstellungen und
                    Datenschutz“. Klicken Sie nun auf „Datenschutz“ und dann im Abschnitt „So verwendet LinkedIn Ihre
                    Daten auf „Ändern“. In nur kurzer Zeit können Sie ausgewählte Daten zu Ihrer Web-Aktivität und Ihrem
                    Kontoverlauf herunterladen.</p>
                <p>Sie haben auch in Ihrem Browser die Möglichkeit, die Datenverarbeitung durch LinkedIn zu unterbinden.
                    Wie oben bereits erwähnt, speichert LinkedIn die meisten Daten über Cookies, die in Ihrem Browser
                    gesetzt werden. Diese Cookies können Sie verwalten, deaktivieren oder löschen. Je nachdem, welchen
                    Browser Sie haben, funktioniert die Verwaltung etwas anders. Die Anleitungen der gängigsten Browser
                    finden Sie hier:</p>
                <p>
                    <a className="adsimple-221146326"
                       href="https://support.google.com/chrome/answer/95647?tid=221146326" target="_blank"
                       rel="noopener noreferrer nofollow" className="external">Chrome: Cookies in Chrome löschen,
                        aktivieren und verwalten</a>
                </p>
                <p>
                    <a className="adsimple-221146326"
                       href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=221146326" target="_blank"
                       rel="noopener noreferrer nofollow" className="external">Safari: Verwalten von Cookies und
                        Websitedaten mit Safari</a>
                </p>
                <p>
                    <a className="adsimple-221146326"
                       href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=221146326"
                       target="_blank" rel="noopener noreferrer nofollow" className="external">Firefox: Cookies löschen,
                        um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben</a>
                </p>
                <p>
                    <a className="adsimple-221146326"
                       href="https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=221146326"
                       target="_blank" rel="noopener noreferrer nofollow" className="external">Internet Explorer:
                        Löschen und Verwalten von Cookies</a>
                </p>
                <p>
                    <a className="adsimple-221146326"
                       href="https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=221146326"
                       target="_blank" rel="noopener noreferrer nofollow" className="external">Microsoft Edge: Löschen
                        und Verwalten von Cookies</a>
                </p>
                <p>Sie können auch grundsätzlich Ihren Browser dahingehend einrichten, dass Sie immer informiert werden,
                    wenn ein Cookie gesetzt werden soll. Dann können Sie immer individuell entscheiden, ob Sie das
                    Cookie zulassen wollen oder nicht.</p>
                <p>Bitte beachten Sie, dass bei der Verwendung dieses Tools Daten von Ihnen auch außerhalb der EU
                    gespeichert und verarbeitet werden können. Die meisten Drittstaaten (darunter auch die USA) gelten
                    nach derzeitigem europäischen Datenschutzrecht als nicht sicher. Daten an unsichere Drittstaaten
                    dürfen also nicht einfach übertragen, dort gespeichert und verarbeitet werden, sofern es keine
                    passenden Garantien (wie etwa EU-Standardvertragsklauseln) zwischen uns und dem außereuropäischen
                    Dienstleister gibt.</p>
                <h3 className="adsimple-221146326">Rechtsgrundlage</h3>
                <p>Wenn Sie eingewilligt haben, dass Daten von Ihnen durch eingebundene Social-Media-Elemente
                    verarbeitet und gespeichert werden können, gilt diese Einwilligung als Rechtsgrundlage der
                    Datenverarbeitung <strong className="adsimple-221146326">(Art. 6 Abs. 1 lit. a DSGVO)</strong>.
                    Grundsätzlich werden Ihre Daten auch auf Grundlage unseres berechtigten Interesses <strong
                        className="adsimple-221146326">(Art. 6 Abs. 1 lit. f DSGVO)</strong> an einer schnellen und
                    guten Kommunikation mit Ihnen oder anderen Kunden und Geschäftspartnern gespeichert und verarbeitet.
                    Die meisten Social-Media-Plattformen setzen auch Cookies in Ihrem Browser, um Daten zu speichern.
                    Darum empfehlen wir Ihnen, unseren Datenschutztext über Cookies genau durchzulesen und die
                    Datenschutzerklärung oder die Cookie-Richtlinien des jeweiligen Dienstanbieters anzusehen.</p>
                <p>Wir haben versucht, Ihnen die wichtigsten Informationen über die Datenverarbeitung durch LinkedIn
                    näherzubringen. Auf <a className="adsimple-221146326"
                                           href="https://www.linkedin.com/legal/privacy-policy" target="_blank"
                                           rel="noopener noreferrer nofollow"
                                           className="external">https://www.linkedin.com/legal/privacy-policy</a> erfahren
                    Sie noch mehr über die Datenverarbeitung des Social-Media-Netzwerks LinkedIn.</p>
                <h2 className="adsimple-221146326">Google Fonts Datenschutzerklärung</h2>

                <h3 className="adsimple-221146326">Was sind Google Fonts?</h3>
                <p>Auf unserer Website verwenden wir Google Fonts. Das sind die “Google-Schriften” der Firma Google Inc.
                    Für den europäischen Raum ist das Unternehmen Google Ireland Limited (Gordon House, Barrow Street
                    Dublin 4, Irland) für alle Google-Dienste verantwortlich.</p>
                <p>Für die Verwendung von Google-Schriftarten müssen Sie sich nicht anmelden bzw. ein Passwort
                    hinterlegen. Weiters werden auch keine Cookies in Ihrem Browser gespeichert. Die Dateien (CSS,
                    Schriftarten/Fonts) werden über die Google-Domains fonts.googleapis.com und fonts.gstatic.com
                    angefordert. Laut Google sind die Anfragen nach CSS und Schriften vollkommen getrennt von allen
                    anderen Google-Diensten. Wenn Sie ein Google-Konto haben, brauchen Sie keine Sorge haben, dass Ihre
                    Google-Kontodaten, während der Verwendung von Google Fonts, an Google übermittelt werden. Google
                    erfasst die Nutzung von CSS (Cascading Style Sheets) und der verwendeten Schriftarten und speichert
                    diese Daten sicher. Wie die Datenspeicherung genau aussieht, werden wir uns noch im Detail
                    ansehen.</p>
                <p>Google Fonts (früher Google Web Fonts) ist ein Verzeichnis mit über 800 Schriftarten, die <a
                    className="adsimple-221146326" href="https://de.wikipedia.org/wiki/Google_LLC?tid=221146326"
                    className="external" rel="nofollow">Google</a> Ihren Nutzern kostenlos zu Verfügung stellen.</p>
                <p>Viele dieser Schriftarten sind unter der SIL Open Font License veröffentlicht, während andere unter
                    der Apache-Lizenz veröffentlicht wurden. Beides sind freie Software-Lizenzen.</p>
                <h3 className="adsimple-221146326">Warum verwenden wir Google Fonts auf unserer Website?</h3>
                <p>Mit Google Fonts können wir auf der eigenen Webseite Schriften nutzen, und müssen sie nicht auf
                    unserem eigenen Server hochladen. Google Fonts ist ein wichtiger Baustein, um die Qualität unserer
                    Webseite hoch zu halten. Alle Google-Schriften sind automatisch für das Web optimiert und dies spart
                    Datenvolumen und ist speziell für die Verwendung bei mobilen Endgeräten ein großer Vorteil. Wenn Sie
                    unsere Seite besuchen, sorgt die niedrige Dateigröße für eine schnelle Ladezeit. Des Weiteren sind
                    Google Fonts sichere Web Fonts. Unterschiedliche Bildsynthese-Systeme (Rendering) in verschiedenen
                    Browsern, Betriebssystemen und mobilen Endgeräten können zu Fehlern führen. Solche Fehler können
                    teilweise Texte bzw. ganze Webseiten optisch verzerren. Dank des schnellen Content Delivery Network
                    (CDN) gibt es mit Google Fonts keine plattformübergreifenden Probleme. Google Fonts unterstützt alle
                    gängigen Browser (Google Chrome, Mozilla Firefox, Apple Safari, Opera) und funktioniert zuverlässig
                    auf den meisten modernen mobilen Betriebssystemen, einschließlich Android 2.2+ und iOS 4.2+ (iPhone,
                    iPad, iPod). Wir verwenden die Google Fonts also, damit wir unser gesamtes Online-Service so schön
                    und einheitlich wie möglich darstellen können.</p>
                <h3 className="adsimple-221146326">Welche Daten werden von Google gespeichert?</h3>
                <p>Wenn Sie unsere Webseite besuchen, werden die Schriften über einen Google-Server nachgeladen. Durch
                    diesen externen Aufruf werden Daten an die Google-Server übermittelt. So erkennt Google auch, dass
                    Sie bzw. Ihre IP-Adresse unsere Webseite besucht. Die Google Fonts API wurde entwickelt, um
                    Verwendung, Speicherung und Erfassung von Endnutzerdaten auf das zu reduzieren, was für eine
                    ordentliche Bereitstellung von Schriften nötig ist. API steht übrigens für „Application Programming
                    Interface“ und dient unter anderem als Datenübermittler im Softwarebereich.</p>
                <p>Google Fonts speichert CSS- und Schrift-Anfragen sicher bei Google und ist somit geschützt. Durch die
                    gesammelten Nutzungszahlen kann Google feststellen, wie gut die einzelnen Schriften ankommen. Die
                    Ergebnisse veröffentlicht Google auf internen Analyseseiten, wie beispielsweise Google Analytics.
                    Zudem verwendet Google auch Daten des eigenen Web-Crawlers, um festzustellen, welche Webseiten
                    Google-Schriften verwenden. Diese Daten werden in der BigQuery-Datenbank von Google Fonts
                    veröffentlicht. Unternehmer und Entwickler nützen das Google-Webservice BigQuery, um große
                    Datenmengen untersuchen und bewegen zu können.</p>
                <p>Zu bedenken gilt allerdings noch, dass durch jede Google Font Anfrage auch Informationen wie
                    Spracheinstellungen, IP-Adresse, Version des Browsers, Bildschirmauflösung des Browsers und Name des
                    Browsers automatisch an die Google-Server übertragen werden. Ob diese Daten auch gespeichert werden,
                    ist nicht klar feststellbar bzw. wird von Google nicht eindeutig kommuniziert.</p>
                <h3 className="adsimple-221146326">Wie lange und wo werden die Daten gespeichert?</h3>
                <p>Anfragen für CSS-Assets speichert Google einen Tag lang auf seinen Servern, die hauptsächlich
                    außerhalb der EU angesiedelt sind. Das ermöglicht uns, mithilfe eines Google-Stylesheets die
                    Schriftarten zu nutzen. Ein Stylesheet ist eine Formatvorlage, über die man einfach und schnell z.B.
                    das Design bzw. die Schriftart einer Webseite ändern kann.</p>
                <p>Die Font-Dateien werden bei Google ein Jahr gespeichert. Google verfolgt damit das Ziel, die Ladezeit
                    von Webseiten grundsätzlich zu verbessern. Wenn Millionen von Webseiten auf die gleichen Schriften
                    verweisen, werden sie nach dem ersten Besuch zwischengespeichert und erscheinen sofort auf allen
                    anderen später besuchten Webseiten wieder. Manchmal aktualisiert Google Schriftdateien, um die
                    Dateigröße zu reduzieren, die Abdeckung von Sprache zu erhöhen und das Design zu verbessern.</p>
                <h3 className="adsimple-221146326">Wie kann ich meine Daten löschen bzw. die Datenspeicherung
                    verhindern?</h3>
                <p>Jene Daten, die Google für einen Tag bzw. ein Jahr speichert können nicht einfach gelöscht werden.
                    Die Daten werden beim Seitenaufruf automatisch an Google übermittelt. Um diese Daten vorzeitig
                    löschen zu können, müssen Sie den Google-Support auf <a className="adsimple-221146326"
                                                                            href="https://support.google.com/?hl=de&tid=221146326"
                                                                            className="external"
                                                                            rel="nofollow">https://support.google.com/?hl=de&tid=221146326</a> kontaktieren.
                    Datenspeicherung verhindern Sie in diesem Fall nur, wenn Sie unsere Seite nicht besuchen.</p>
                <p>Anders als andere Web-Schriften erlaubt uns Google uneingeschränkten Zugriff auf alle Schriftarten.
                    Wir können also unlimitiert auf ein Meer an Schriftarten zugreifen und so das Optimum für unsere
                    Webseite rausholen. Mehr zu Google Fonts und weiteren Fragen finden Sie auf <a
                        className="adsimple-221146326" href="https://developers.google.com/fonts/faq?tid=221146326"
                        className="external" rel="nofollow">https://developers.google.com/fonts/faq?tid=221146326</a>.
                    Dort geht zwar Google auf datenschutzrelevante Angelegenheiten ein, doch wirklich detaillierte
                    Informationen über Datenspeicherung sind nicht enthalten. Es ist relativ schwierig, von Google
                    wirklich präzise Informationen über gespeicherten Daten zu bekommen.</p>
                <h3 className="adsimple-221146326">Rechtsgrundlage</h3>
                <p>Wenn Sie eingewilligt haben, dass Google Fonts eingesetzt werden darf, ist die Rechtsgrundlage der
                    entsprechenden Datenverarbeitung diese Einwilligung. Diese Einwilligung stellt laut<strong
                        className="adsimple-221146326"> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</strong> die
                    Rechtsgrundlage für die Verarbeitung personenbezogener Daten, wie sie bei der Erfassung durch Google
                    Fonts vorkommen kann, dar.</p>
                <p>Von unserer Seite besteht zudem ein berechtigtes Interesse, Google Font zu verwenden, um unser
                    Online-Service zu optimieren. Die dafür entsprechende Rechtsgrundlage ist <strong
                        className="adsimple-221146326">Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</strong>.</p>
                <p>Welche Daten grundsätzlich von Google erfasst werden und wofür diese Daten verwendet werden, können
                    Sie auch auf <a className="adsimple-221146326"
                                    href="https://policies.google.com/privacy?hl=de&tid=221146326" className="external"
                                    rel="nofollow">https://www.google.com/intl/de/policies/privacy/</a> nachlesen.</p>
                <p>Quelle: Erstellt mit dem <a
                    title="Datenschutz Generator von firmenwebseiten.at"
                    href="https://www.firmenwebseiten.at/datenschutz-generator/" target="_blank" rel="follow">Datenschutz
                    Generator</a> von firmenwebseiten.at</p></p>


        </Layout>
    )
}