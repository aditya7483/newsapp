import { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  Alert,
  FlatList,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import NewsContainer from './components/NewsContainer';
import axios from 'axios';
import Header from './components/Header';
import SearchBar from './components/Search';
const API_KEY = '445f58e1d17c4229b23e3965d19197c7';

export default function App() {
  const [newsData, setNewsData] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = async (endpoint, params = {}) => {
    try {
      setLoading(true);
      const res = await axios.get(`https://newsapi.org/v2/${endpoint}`, {
        params: {
          apiKey: API_KEY,
          country: 'IN',
          q: search,
          ...params,
        },
      });
      setNewsData(res.data.articles);
      // const news = [
      //   {
      //     source: {
      //       id: null,
      //       name: 'NDTV News',
      //     },
      //     author: null,
      //     title:
      //       'Al Pacino, 83, Welcomes A Baby Boy With Girlfriend Noor Alfallah - NDTV Movies',
      //     description: 'The couple have named their son Roman',
      //     url: 'https://www.ndtv.com/entertainment/al-pacino-83-welcomes-a-baby-boy-with-girlfriend-noor-alfallah-4125682',
      //     urlToImage:
      //       'https://c.ndtvimg.com/2023-06/testrol8_al-pacino_625x300_16_June_23.jpg',
      //     publishedAt: '2023-06-16T04:07:07Z',
      //     content:
      //       'Noor pictured with Al Pacino. (courtesy: nooralfallah)\r\nNew Delhi: Congratulations are in order for Hollywood veteran Al Pacino. The actor just welcomed his fourth child - a baby boy, and his first w… [+1414 chars]',
      //   },
      //   {
      //     source: {
      //       id: null,
      //       name: 'The Indian Express',
      //     },
      //     author: 'The Indian Express',
      //     title:
      //       'Adipurush movie release and review Live Updates: Fans say Prabhas film is a must-watch but VFX ‘still half-baked’ - The Indian Express',
      //     description: null,
      //     url: 'https://indianexpress.com/article/entertainment/bollywood/adipurush-movie-release-review-live-updates-prabhas-saif-ali-khan-box-office-collection-8664451/',
      //     urlToImage: null,
      //     publishedAt: '2023-06-16T03:57:19Z',
      //     content: null,
      //   },
      //   {
      //     source: {
      //       id: null,
      //       name: 'Hindustan Times',
      //     },
      //     author: 'HT Entertainment Desk',
      //     title:
      //       'Alia Bhatt chills with Katrina Kaif, Vicky Kaushal at airport lounge, fans react - Hindustan Times',
      //     description:
      //       'Internet had a lot to say after a video of Katrina Kaif and Vicky Kaushal chatting with Alia Bhatt at the airport lounge surfaced online. Watch it here.',
      //     url: 'https://www.hindustantimes.com/environment/alia-bhatt-katrina-kaif-vicky-kaushal-video-airport-lounge-101686885035723.html',
      //     urlToImage:
      //       'https://www.hindustantimes.com/ht-img/img/2023/06/16/1600x900/alia_katrina_1686885445357_1686885462160.png',
      //     publishedAt: '2023-06-16T03:32:54Z',
      //     content:
      //       'Katrina Kaif and Vicky Kaushal were seen arriving together at Mumbai airport in videos and photos shared on paparazzi and fan pages on Wednesday. Actor Alia Bhatt was also spotted arriving solo at th… [+3166 chars]',
      //   },
      //   {
      //     source: {
      //       id: null,
      //       name: 'Livemint',
      //     },
      //     author: 'Govind Choudhary',
      //     title:
      //       'BGMI redeem codes for June 16, 2023: Unlock exciting rewards, chicken congratulatory gestures, weapon skins and more! | Mint - Mint',
      //     description:
      //       'BGMI redeem codes allow players to obtain free in-game items without spending money on UC. Follow the steps on the official website to redeem codes for a range of items including skins, outfits and emotes. Latest codes include UMP9 skin, free outfit, AKM Glac…',
      //     url: 'https://www.livemint.com/technology/tech-news/bgmi-redeem-codes-for-june-16-2023-unlock-exciting-rewards-chicken-congratulatory-gestures-weapon-skins-and-more-11686885347438.html',
      //     urlToImage:
      //       'https://www.livemint.com/lm-img/img/2023/06/16/600x338/bgmi_1686885810032_1686885928180.webp',
      //     publishedAt: '2023-06-16T03:26:26Z',
      //     content:
      //       'BGMI (Battlegrounds Mobile India) quickly rose to prominence in India after the ban on PUBG Mobile. Despite facing its own ban, the Indian government decided to allow BGMI back into the country with … [+2246 chars]',
      //   },
      //   {
      //     source: {
      //       id: null,
      //       name: 'NDTV News',
      //     },
      //     author: 'NDTV Sports Desk',
      //     title:
      //       '"My Bowling Overseas Has Been...": Ravichandran Ashwin Breaks Silence On WTC Final Snub - NDTV Sports',
      //     description:
      //       "Ravichandran Ashwin wasn't picked in the Indian team's playing XI for the World Test Championship final against Australia. He has now broken silence on the snub.",
      //     url: 'https://sports.ndtv.com/cricket/my-bowling-overseas-has-been-ravichandran-ashwin-breaks-silence-on-wtc-final-snub-4125597',
      //     urlToImage:
      //       'https://c.ndtvimg.com/2023-06/iajg39og_ravichandran-ashwin-bcci_625x300_16_June_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675',
      //     publishedAt: '2023-06-16T03:02:28Z',
      //     content:
      //       "Ravichandran Ashwin, the No. 1 Test bowler in the world, couldn't find a place in the Indian team's playing XI for the World Test Championship final against Australia. For many, Ashwin's absence from… [+2034 chars]",
      //   },
      //   {
      //     source: {
      //       id: 'the-times-of-india',
      //       name: 'The Times of India',
      //     },
      //     author: 'Gaurav Gupta',
      //     title:
      //       'Rohit Sharma to be rested for part of West Indies tour? - Indiatimes.com',
      //     description:
      //       'Cricket News: There is a possibility that India captain Rohit Sharma, currently going through a lean patch, will be rested for some part of the West Indies tour, TO',
      //     url: 'https://timesofindia.indiatimes.com/sports/cricket/india-in-west-indies/rohit-sharma-to-be-rested-for-part-of-west-indies-tour/articleshow/101033005.cms',
      //     urlToImage:
      //       'https://static.toiimg.com/thumb/msid-101032943,width-1070,height-580,imgsize-46764,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
      //     publishedAt: '2023-06-16T03:01:00Z',
      //     content: 'Top-5: Highest run-getters in Ashes history',
      //   },
      //   {
      //     source: {
      //       id: 'the-hindu',
      //       name: 'The Hindu',
      //     },
      //     author: 'The Hindu',
      //     title:
      //       'Explained| Are non-communicable diseases increasing in India? - The Hindu',
      //     description: null,
      //     url: 'https://www.thehindu.com/sci-tech/health/explained-are-non-communicable-diseases-increasing-in-india/article66971961.ece',
      //     urlToImage: null,
      //     publishedAt: '2023-06-16T03:00:00Z',
      //     content: null,
      //   },
      //   {
      //     source: {
      //       id: null,
      //       name: 'India Today',
      //     },
      //     author: 'India Today Crime Desk',
      //     title:
      //       "MBBS student found hanging in hostel room in UP's Modinagar, suicide note suggests 'breakup' - India Today",
      //     description:
      //       "A 24-year-old female medical student was found dead in her hostel room after allegedly hanging herself from the ceiling fan. The incident occurred in Modinagar, where the woman's body was discovered by her friends. A suicide note indicated that she took her o…",
      //     url: 'https://www.indiatoday.in/crime/story/up-modinagar-mbbs-student-suicide-over-breakup-medical-student-hangs-self-2393644-2023-06-16',
      //     urlToImage:
      //       'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/crime_10-sixteen_nine.jpg?VersionId=QzC5hwiaYM069JE52sYvb0fOyB4uC.aF',
      //     publishedAt: '2023-06-16T02:47:23Z',
      //     content:
      //       'By India Today Crime Desk: In a tragic incident, a 24-year-old third-year MBBS student, identified as Divya Jyoti, allegedly died by suicide by hanging herself from the ceiling fan in her hostel room… [+751 chars]',
      //   },
      //   {
      //     source: {
      //       id: null,
      //       name: 'Hindustan Times',
      //     },
      //     author: 'HT Sports Desk',
      //     title:
      //       '‘ACC president Jay Shah…’: PCB reacts after Asia Cup hybrid model gets approved - Hindustan Times',
      //     description:
      //       'Asia Cup: The two likely India-Pakistan matches - both will qualify to clash in the next round if they beat Nepal - and the final will be played in Sri Lanka. | Cricket',
      //     url: 'https://www.hindustantimes.com/cricket/acc-president-jay-shah-pcb-chief-sethi-reacts-after-asia-cup-hybrid-model-gets-approved-ind-vs-pak-in-sri-lanka-101686848274720.html',
      //     urlToImage:
      //       'https://www.hindustantimes.com/ht-img/img/2023/06/15/1600x900/sethi_shah_1672969755103_1686848684800.jpg',
      //     publishedAt: '2023-06-16T02:42:24Z',
      //     content:
      //       'After BCCIs refusal to play Asia Cup 2023 in Pakistan, the PCB had been pushing for the hybrid model, where they get to host at least the non-India matches of the tournaments initial round. After mon… [+3232 chars]',
      //   },
      //   {
      //     source: {
      //       id: 'the-hindu',
      //       name: 'The Hindu',
      //     },
      //     author: 'The Hindu',
      //     title:
      //       'Encounter underway between terrorists and security personnel in J&K’s Kupwara - The Hindu',
      //     description: null,
      //     url: 'https://www.thehindu.com/news/national/encounter-underway-between-terrorists-and-security-personnel-in-jks-kupwara/article66974995.ece',
      //     urlToImage: null,
      //     publishedAt: '2023-06-16T02:28:00Z',
      //     content: null,
      //   },
      //   {
      //     source: {
      //       id: null,
      //       name: 'NDTV News',
      //     },
      //     author: null,
      //     title:
      //       'After Trail Of Destruction In Gujarat, Cyclone Biparjoy To Head To Rajasthan - NDTV',
      //     description:
      //       "At least two died and 22 were injured, while electric poles and trees were uprooted as the 'very severe' cyclonic storm Biparjoy made landfall in Gujarat on Thursday. The cyclone is likely to weaken into a depression this evening over Rajasthan.",
      //     url: 'https://www.ndtv.com/india-news/after-trail-of-destruction-in-gujarat-cyclone-biparjoy-to-head-to-rajasthan-4125510',
      //     urlToImage:
      //       'https://c.ndtvimg.com/2023-06/72uradro_cyclone-biparjoy_625x300_16_June_23.jpg',
      //     publishedAt: '2023-06-16T01:45:00Z',
      //     content:
      //       "<li>The intensity of cyclone Biparjoy has reduced from 'very severe' category to 'severe' after the landfall, the India Meteorological Department (IMD) said. \"The cyclone has now moved from sea to la… [+2561 chars]",
      //   },
      //   {
      //     source: {
      //       id: null,
      //       name: 'Hindustan Times',
      //     },
      //     author: 'Sanskriti Falor',
      //     title:
      //       "‘Ready to give 'qurbaani’: TMC leader on Calcutta HC order for panchayat polls - Hindustan Times",
      //     description:
      //       'At least four people were killed across West Bengal on Thursday, the last day of filing nominations for the three-tier panchayat polls. | Kolkata News',
      //     url: 'https://www.hindustantimes.com/cities/kolkata-news/tmc-madan-mitra-mamata-banerjee-panchayat-polls-violence-paramilitary-forces-calcutta-high-court-101686876042748.html',
      //     urlToImage:
      //       'https://www.hindustantimes.com/ht-img/img/2023/06/16/1600x900/ANI-20230615248-0_1686878185531_1686878208981.jpg',
      //     publishedAt: '2023-06-16T01:40:46Z',
      //     content:
      //       'Trinamool Congress leader Madan Mitra claimed on Thursday after a division bench of the Calcutta high court directed the state election commission to request for the Central Paramilitary forces amid … [+3388 chars]',
      //   },
      //   {
      //     source: {
      //       id: null,
      //       name: 'Livemint',
      //     },
      //     author: 'Asit Manohar',
      //     title:
      //       'Buy or sell: Vaishali Parekh recommends three stocks to buy today — 16th June - Mint',
      //     description:
      //       "Buy or sell stocks: Vaishali Parekh has recommended three stocks to buy today — Finolex Cables, Divi's Lab and Latent View Analytics",
      //     url: 'https://www.livemint.com/market/stock-market-news/buy-or-sell-vaishali-parekh-recommends-three-stocks-to-buy-today-16th-june-11686879086580.html',
      //     urlToImage:
      //       'https://www.livemint.com/lm-img/img/2023/06/16/600x338/Buy_or_sell_stock_market_news_1686879241110_1686879241314.JPG',
      //     publishedAt: '2023-06-16T01:38:45Z',
      //     content:
      //       'Buy or sell stocks for today: After oscillating in between green and red territory throughout the day, Indian stock market finally snapped three days winning streak on Thursday. NSE Nifty lost 67 poi… [+2788 chars]',
      //   },
      //   {
      //     source: {
      //       id: 'the-times-of-india',
      //       name: 'The Times of India',
      //     },
      //     author: 'ETMarkets.com',
      //     title:
      //       "SGX Nifty up 50 points; here's what changed for market while you were sleeping - Economic Times",
      //     description:
      //       'Option data suggests a broader trading range in between 18450 to 18900 zones while an immediate trading range in between 18600 to 18800 zones.',
      //     url: 'https://economictimes.indiatimes.com/markets/stocks/news/sgx-nifty-up-50-points-heres-what-changed-for-market-while-you-were-sleeping/articleshow/101026487.cms',
      //     urlToImage:
      //       'https://img.etimg.com/thumb/msid-101026477,width-1070,height-580,imgsize-111674,overlay-etmarkets/photo.jpg',
      //     publishedAt: '2023-06-16T01:31:00Z',
      //     content:
      //       'Domestic equities witnessed selling pressure on Thursday on hawkish US Fed comments despite a pause in rate hikes, dampening investor sentiments."Market could remain consolidative for the next few da… [+2530 chars]',
      //   },
      //   {
      //     source: {
      //       id: null,
      //       name: 'Moneycontrol',
      //     },
      //     author: 'Rakesh Patil',
      //     title:
      //       'Buzzing Stocks: IKIO Lighting, BHEL, TVS Motor, Pitti Engg, Natco Pharma & others in focus - Moneycontrol',
      //     description:
      //       'Stocks to Watch: Check out the companies making headlines before the opening bell today.',
      //     url: 'https://www.moneycontrol.com/news/photos/business/stocks/buzzing-stocks-ikio-lighting-bhel-tvs-motor-pitti-engg-natco-pharma-others-in-focus-10804371.html',
      //     urlToImage:
      //       'https://images.moneycontrol.com/static-mcnews/2023/06/stocks_in_news-1-770x433.jpg',
      //     publishedAt: '2023-06-16T01:29:39Z',
      //     content: null,
      //   },
      //   {
      //     source: {
      //       id: null,
      //       name: 'DNA India',
      //     },
      //     author: 'DNA Web Team',
      //     title:
      //       "Did one day on Earth only last 19 hours? Here's what new study reveals - DNA India",
      //     description:
      //       'A study has revealed that the Earth had only 19 hrs in a day. Find out the reason behind it and what made the Earth to take 24 hrs to make one rotation about its axis.',
      //     url: 'https://www.dnaindia.com/science/report-did-one-day-on-earth-only-last-19-hours-here-s-what-new-study-reveals-3047834',
      //     urlToImage:
      //       'https://cdn.dnaindia.com/sites/default/files/styles/half/public/2023/06/16/2595047-untitled-design-2023-06-15t235213.615.jpg',
      //     publishedAt: '2023-06-16T01:16:32Z',
      //     content:
      //       'Reported By:| Edited By: DNA Web Team |Source: DNA Web Desk |Updated: Jun 16, 2023, 06:46 AM ISTToday, we know that the Earth takes 24 hours to complete one rotation in its axis. However, in the has … [+1595 chars]',
      //   },
      //   {
      //     source: {
      //       id: 'the-times-of-india',
      //       name: 'The Times of India',
      //     },
      //     author: 'Rajesh Mascarenhas',
      //     title:
      //       'Rejig of FTSE indices could see net inflow of $150-200 million - The Economic Times',
      //     description:
      //       '​​Wipro is expected to get $32 million whereas Punjab National Bank, Bajaj Finance, Varun Beverages, and Adani Transmission could see inflow of $20 million each. Infosys, HCL Tech, and Equitas Small Finance could see an outflow between $13 million and $34 mil…',
      //     url: 'https://economictimes.indiatimes.com/markets/stocks/news/rejig-of-ftse-indices-could-see-net-inflow-of-150-200-million/articleshow/101030615.cms',
      //     urlToImage:
      //       'https://img.etimg.com/thumb/msid-101030618,width-1070,height-580,imgsize-140089,overlay-etmarkets/photo.jpg',
      //     publishedAt: '2023-06-16T00:09:00Z',
      //     content:
      //       'Global index services provider FTSE is to rejig its indices on Friday which could lead to a net inflow of $150-200 million into various stocks. Adani Enterprises, Reliance Industries, Wipro, Punjab N… [+858 chars]',
      //   },
      //   {
      //     source: {
      //       id: null,
      //       name: 'The Indian Express',
      //     },
      //     author: 'Soumyarendra Barik',
      //     title:
      //       'CoWIN data ‘breach’: Probe looks at likely leaks from 11 states - The Indian Express',
      //     description:
      //       'The agency is looking into any potential leaks that could have happened from the databases of these states. While Karnataka and Kerala are learnt to be among the 11 states, there is no information yet on the remaining states.',
      //     url: 'https://indianexpress.com/article/india/cowin-data-breach-probe-looks-at-likely-leaks-from-11-states-8665529/',
      //     urlToImage:
      //       'https://images.indianexpress.com/2023/06/cowin-leak-feat-1.jpg',
      //     publishedAt: '2023-06-15T22:32:00Z',
      //     content:
      //       'As part of its investigation into the alleged CoWIN data breach, the Indian Computer Emergency Response Team (CERT-In) the nodal cyber security agency is in discussions with at least 11 state governm… [+2776 chars]',
      //   },
      //   {
      //     source: {
      //       id: null,
      //       name: 'Sportskeeda',
      //     },
      //     author: 'Apratim Banerjee',
      //     title:
      //       '"Rodri for the Ballon d\'Or", "Let\'s all laugh at Italy" - Twitter reacts as Spain defeats Italy 2-1 in Nations League semi-final - Sportskeeda',
      //     description:
      //       'Spain managed to earn a 2-1 win against Italy in the UEFA Nations League semi-final and progressed to the final as a result.',
      //     url: 'https://www.sportskeeda.com/football/news-rodri-ballon-d-or-let-s-laugh-italy-twitter-reacts-spain-defeats-italy-2-1-nations-league-semi-final',
      //     urlToImage:
      //       'https://staticc.sportskeeda.com/editor/2023/06/98fe3-16868619749586-1920.jpg',
      //     publishedAt: '2023-06-15T21:25:00Z',
      //     content: null,
      //   },
      //   {
      //     source: {
      //       id: null,
      //       name: 'NDTV News',
      //     },
      //     author: null,
      //     title:
      //       '15 Killed In Canada Highway Crash After Truck Hits Bus In Manitoba - NDTV',
      //     description:
      //       "A semi-trailer truck and a bus carrying seniors collided in central Canada's Manitoba province on Thursday, killing at least 15 people and injuring 10 more, authorities said.",
      //     url: 'https://www.ndtv.com/world-news/10-killed-in-road-accident-in-canada-report-4125444',
      //     urlToImage:
      //       'https://c.ndtvimg.com/2023-06/uf5pc104_canada-bus-accident_625x300_16_June_23.jpg',
      //     publishedAt: '2023-06-15T20:44:49Z',
      //     content:
      //       "At least 15 died Thursday in a road accident in central Canada's Manitoba province. (Representational)\r\nMontreal: A semi-trailer truck and a bus carrying seniors collided in central Canada's Manitoba… [+2856 chars]",
      //   },
      // ];
      // setNewsData([...news]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = () => {
    fetchData('top-headlines');
  };

  useEffect(() => {
    fetchData('top-headlines');
  }, []);
  const renderNewsItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleNewsPress(item.url)}
      activeOpacity={0.8}
    >
      <NewsContainer {...item} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchBar
        search={search}
        setSearch={setSearch}
        onSubmit={handleSearchSubmit}
      />
      {loading ? (
        <ActivityIndicator
          style={styles.loadingIndicator}
          size="large"
          color="#007AFF"
        />
      ) : newsData.length > 0 ? (
        <FlatList
          data={newsData}
          renderItem={renderNewsItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <Text style={styles.notFoundText}>No Results Found!!</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  listContainer: {
    marginTop: 40,
    marginHorizontal: 10,
    paddingBottom: 10,
  },
  notFoundText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
