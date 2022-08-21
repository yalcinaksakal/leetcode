/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function (target, startFuel, stations) {
	if (startFuel >= target) return 0;
	const memo = {};
	stations.unshift([0, startFuel]);
	let stops = 1,
		bfs = [[0, startFuel]];
	while (bfs.length) {
		const next = {};
		for (const [curPos, range] of bfs) {
			for (
				let i = curPos + 1;
				i < stations.length && stations[i][0] <= range;
				i++
			) {
				const newRange = range + stations[i][1];
				if (memo[i] >= newRange) continue;
				if (newRange >= target) return stops;
				memo[i] = newRange;
				next[i] = [i, newRange];
			}
		}
		stops++;
		bfs = Object.values(next);
	}
	return -1;
};
console.log(
	minRefuelStops(1000000, 13114, [
		[2182, 5387],
		[4390, 9147],
		[7330, 12946],
		[8554, 1167],
		[9681, 7756],
		[11826, 11188],
		[12309, 9485],
		[13247, 10157],
		[17459, 4143],
		[18054, 1472],
		[19848, 6404],
		[21009, 11766],
		[25146, 6524],
		[26562, 5195],
		[26905, 745],
		[27553, 9497],
		[29548, 632],
		[34995, 2375],
		[41490, 2602],
		[43791, 3193],
		[47110, 12802],
		[48013, 352],
		[49436, 9844],
		[51056, 10391],
		[51900, 10839],
		[55098, 3407],
		[55426, 1604],
		[58727, 5276],
		[60206, 2786],
		[61094, 2675],
		[65046, 6984],
		[67766, 11343],
		[69096, 6838],
		[70388, 9748],
		[71319, 3742],
		[71371, 4504],
		[71518, 11728],
		[71549, 4875],
		[75164, 5609],
		[76120, 2686],
		[78028, 6039],
		[82505, 3277],
		[83840, 9101],
		[86338, 11570],
		[88183, 15],
		[89699, 12330],
		[91258, 129],
		[92748, 9690],
		[93669, 5528],
		[94112, 7895],
		[94355, 7206],
		[98125, 11244],
		[100478, 793],
		[111594, 5338],
		[112022, 118],
		[114332, 4462],
		[114988, 12268],
		[115545, 9558],
		[116059, 264],
		[117531, 1958],
		[118651, 9511],
		[121420, 9437],
		[122409, 12322],
		[125753, 10430],
		[126142, 1284],
		[126434, 10699],
		[129922, 9114],
		[131202, 11470],
		[138601, 6199],
		[147688, 12011],
		[149166, 7174],
		[151530, 12293],
		[153580, 12061],
		[158364, 8917],
		[158803, 4024],
		[161784, 5938],
		[162216, 12585],
		[163769, 10333],
		[167216, 748],
		[168893, 9282],
		[170244, 2726],
		[171748, 1991],
		[172071, 781],
		[172103, 5279],
		[172741, 6303],
		[173758, 340],
		[184877, 6979],
		[185227, 568],
		[187672, 5732],
		[187910, 11654],
		[188804, 6752],
		[192132, 13065],
		[192700, 8417],
		[193737, 1649],
		[193758, 1746],
		[199862, 11473],
		[202301, 6192],
		[203184, 12994],
		[208269, 3099],
		[210550, 713],
		[212605, 4646],
		[212756, 12949],
		[218154, 11238],
		[219663, 8325],
		[221356, 10174],
		[221855, 11889],
		[222957, 3818],
		[225039, 8271],
		[226457, 11182],
		[227057, 3855],
		[231083, 8129],
		[237315, 7805],
		[241284, 9525],
		[243986, 92],
		[244248, 9624],
		[248109, 10556],
		[249102, 5695],
		[250336, 10630],
		[250612, 9768],
		[253119, 9595],
		[254123, 5100],
		[255672, 3382],
		[261988, 3361],
		[262253, 2647],
		[264157, 9296],
		[264710, 9810],
		[265400, 10779],
		[266556, 11490],
		[267284, 724],
		[269921, 9955],
		[271673, 3815],
		[279466, 7459],
		[281257, 1688],
		[285915, 7347],
		[289030, 10116],
		[292838, 5892],
		[298617, 6745],
		[298974, 10344],
		[301171, 1843],
		[301675, 9832],
		[305491, 10363],
		[306600, 8464],
		[307644, 12302],
		[308977, 11960],
		[310307, 8494],
		[310510, 8574],
		[311242, 12708],
		[312399, 5337],
		[313622, 4049],
		[316797, 8378],
		[317379, 8055],
		[318429, 12258],
		[318609, 276],
		[318792, 11360],
		[318795, 2751],
		[321422, 12111],
		[321429, 6080],
		[323863, 10172],
		[324589, 3897],
		[324623, 12328],
		[329314, 6726],
		[329804, 5865],
		[333241, 9568],
		[337283, 12563],
		[337551, 11803],
		[339997, 7912],
		[341889, 6518],
		[343030, 9743],
		[350036, 2580],
		[351367, 528],
		[354094, 3006],
		[354856, 4283],
		[356240, 3808],
		[360588, 686],
		[360974, 2097],
		[364211, 3031],
		[364469, 11127],
		[365870, 11456],
		[366025, 4648],
		[366650, 9746],
		[370376, 3885],
		[371331, 2723],
		[371732, 726],
		[372766, 11791],
		[373029, 6376],
		[373402, 10219],
		[375174, 6334],
		[375569, 5595],
		[379217, 12164],
		[382111, 335],
		[390592, 4052],
		[399076, 7839],
		[399957, 3072],
		[405421, 10210],
		[406393, 961],
		[406406, 7432],
		[407459, 4169],
		[410502, 347],
		[411882, 6565],
		[415910, 11996],
		[416424, 11325],
		[416709, 12000],
		[417615, 1245],
		[420819, 10844],
		[421438, 9684],
		[424841, 12913],
		[425381, 5606],
		[425882, 10668],
		[426188, 426],
		[427131, 10535],
		[429703, 3302],
		[432975, 12905],
		[434174, 2810],
		[435744, 1518],
		[436255, 1226],
		[438077, 11271],
		[441259, 7890],
		[441695, 5882],
		[443173, 12419],
		[445570, 11450],
		[446522, 9626],
		[449757, 1107],
		[450624, 3473],
		[452001, 4671],
		[452588, 6629],
		[453044, 12584],
		[459628, 3289],
		[462205, 1520],
		[464939, 11985],
		[465775, 1967],
		[467967, 6836],
		[469141, 953],
		[469923, 10200],
		[470196, 9202],
		[471110, 5311],
		[474069, 2846],
		[474575, 11623],
		[474730, 12871],
		[475538, 845],
		[475575, 3852],
		[476395, 10422],
		[481788, 1878],
		[489449, 6722],
		[490716, 1188],
		[491308, 12915],
		[491508, 5494],
		[491553, 8091],
		[492038, 9186],
		[492484, 3216],
		[495283, 7499],
		[503580, 11971],
		[505798, 6172],
		[508227, 5572],
		[510146, 148],
		[511167, 6022],
		[512093, 8088],
		[513107, 12224],
		[514431, 934],
		[516064, 9802],
		[518367, 6405],
		[523656, 1271],
		[525979, 2842],
		[526734, 7141],
		[529051, 5144],
		[530029, 5103],
		[533245, 145],
		[535986, 7736],
		[536964, 891],
		[537017, 5274],
		[538151, 7802],
		[539105, 272],
		[539151, 1501],
		[539223, 4937],
		[539546, 1783],
		[540724, 11389],
		[544992, 9028],
		[546481, 3670],
		[546663, 7614],
		[548289, 10188],
		[548479, 12036],
		[549918, 5147],
		[550420, 10627],
		[553978, 9871],
		[562977, 11006],
		[564603, 9970],
		[566601, 5982],
		[567796, 7986],
		[568386, 2537],
		[568818, 10112],
		[569851, 10574],
		[573077, 10913],
		[573143, 7557],
		[574112, 11613],
		[576318, 10871],
		[577746, 9745],
		[579425, 7734],
		[582886, 10475],
		[583828, 7975],
		[586625, 9302],
		[588753, 8825],
		[588830, 5042],
		[590269, 5204],
		[595227, 427],
		[596048, 12428],
		[596493, 967],
		[602765, 2322],
		[605837, 4315],
		[608904, 12084],
		[609715, 8438],
		[610557, 2356],
		[610719, 2341],
		[615573, 2096],
		[616243, 5243],
		[618096, 6923],
		[623839, 442],
		[624065, 419],
		[625170, 1074],
		[625537, 5720],
		[625681, 6306],
		[625758, 6644],
		[627579, 3219],
		[630440, 8710],
		[636466, 1354],
		[639357, 2790],
		[640332, 3831],
		[640755, 3423],
		[643981, 1823],
		[645593, 3780],
		[646892, 2392],
		[647897, 3567],
		[654331, 10485],
		[655796, 5976],
		[656278, 2609],
		[662476, 7328],
		[663044, 3162],
		[666645, 4465],
		[666784, 7774],
		[668022, 6705],
		[670137, 2311],
		[671234, 11462],
		[671444, 7429],
		[672157, 1409],
		[672601, 3447],
		[673203, 7826],
		[674379, 8141],
		[680025, 12249],
		[681017, 6713],
		[681694, 8719],
		[683521, 8445],
		[683819, 396],
		[686805, 8247],
		[687569, 11904],
		[687588, 5757],
		[688084, 333],
		[690495, 3203],
		[693484, 6872],
		[700827, 3279],
		[702817, 7816],
		[703083, 5822],
		[703502, 3807],
		[703574, 7009],
		[704481, 6460],
		[705384, 1909],
		[705590, 6106],
		[707918, 8816],
		[709459, 12255],
		[712892, 10985],
		[714407, 8278],
		[715443, 8448],
		[716292, 11562],
		[716703, 4417],
		[718673, 3953],
		[719099, 10731],
		[719372, 12588],
		[720718, 12419],
		[721408, 581],
		[722368, 9607],
		[722993, 2920],
		[726623, 6208],
		[727789, 8403],
		[730003, 8387],
		[731208, 4160],
		[731593, 3307],
		[731801, 8740],
		[732412, 8442],
		[734377, 10987],
		[735609, 403],
		[743852, 2084],
		[750839, 12351],
		[752593, 778],
		[754101, 5506],
		[755327, 1099],
		[755569, 987],
		[756288, 1781],
		[757736, 11413],
		[758641, 11075],
		[759656, 6096],
		[761473, 2745],
		[765380, 12579],
		[765829, 2783],
		[766479, 6785],
		[773280, 9124],
		[774457, 3658],
		[777100, 5487],
		[781779, 7594],
		[783135, 972],
		[789322, 4994],
		[791618, 9493],
		[791816, 4171],
		[792263, 7936],
		[792344, 11368],
		[793454, 7338],
		[795409, 6966],
		[796184, 5854],
		[798263, 7891],
		[800243, 464],
		[801809, 2690],
		[803939, 10586],
		[811509, 12881],
		[816336, 11877],
		[816897, 494],
		[818507, 11801],
		[819364, 9528],
		[820728, 2020],
		[822932, 2155],
		[827922, 9008],
		[830705, 9957],
		[833675, 6163],
		[835342, 593],
		[837430, 4353],
		[837588, 2037],
		[838419, 12105],
		[838563, 1591],
		[842118, 1615],
		[844030, 3237],
		[844273, 3134],
		[847409, 12387],
		[848736, 8557],
		[849609, 11991],
		[851531, 419],
		[864214, 2388],
		[866122, 6701],
		[866832, 11723],
		[867711, 7194],
		[867845, 905],
		[870420, 12654],
		[872285, 5859],
		[873270, 6115],
		[875330, 11084],
		[875837, 4505],
		[879616, 1693],
		[880549, 7314],
		[884373, 3739],
		[887068, 1642],
		[887885, 5407],
		[889430, 8937],
		[889811, 3763],
		[898051, 12365],
		[898739, 3312],
		[899208, 13015],
		[903857, 337],
		[904429, 11798],
		[904822, 2714],
		[909107, 12230],
		[910310, 258],
		[921644, 13049],
		[922160, 9410],
		[922921, 10704],
		[923870, 8442],
		[927770, 4458],
		[929178, 3383],
		[932170, 806],
		[935665, 8814],
		[939180, 11885],
		[942536, 1164],
		[944477, 3541],
		[950961, 6017],
		[954988, 8874],
		[956345, 6185],
		[957846, 6105],
		[958940, 9072],
		[961955, 1102],
		[964889, 969],
		[965193, 10333],
		[967893, 11446],
		[969030, 2675],
		[969427, 380],
		[976849, 11403],
		[976866, 9982],
		[979762, 6785],
		[982417, 6372],
		[982740, 322],
		[983937, 12965],
		[984614, 1020],
		[986324, 11721],
		[993619, 11953],
		[995986, 9101],
		[997033, 2222],
		[998783, 7654],
		[999879, 783],
	])
);

console.log(
	minRefuelStops(1000000, 8900, [
		[3784, 1700],
		[4363, 7414],
		[4402, 4441],
		[6244, 6086],
		[6602, 6465],
		[8500, 3395],
		[10083, 1222],
		[10369, 3699],
		[11329, 352],
		[15127, 1031],
		[16665, 3144],
		[17795, 8511],
		[17814, 525],
		[18631, 2992],
		[19033, 4021],
		[20405, 6872],
		[25441, 1541],
		[26355, 4519],
		[26372, 3309],
		[26488, 6718],
		[31901, 1974],
		[35060, 3547],
		[35768, 6929],
		[38984, 7678],
		[39887, 7825],
		[40376, 3899],
		[41522, 1684],
		[41712, 5192],
		[42132, 6067],
		[42970, 1386],
		[43539, 3813],
		[44791, 8005],
		[49950, 5783],
		[51340, 8117],
		[52944, 4695],
		[54164, 3517],
		[54253, 841],
		[54268, 4745],
		[56922, 2182],
		[59247, 3348],
		[59554, 3475],
		[59719, 5849],
		[60083, 749],
		[64542, 7106],
		[66942, 3033],
		[67178, 7481],
		[69669, 3746],
		[74683, 4892],
		[75176, 4289],
		[81114, 3217],
		[83422, 7849],
		[83813, 8129],
		[88064, 7159],
		[91236, 7470],
		[93726, 5725],
		[95473, 1216],
		[95934, 5050],
		[100011, 6110],
		[103261, 4425],
		[110981, 5972],
		[115470, 6500],
		[115965, 4201],
		[116530, 3107],
		[119942, 7093],
		[120094, 1606],
		[121770, 6679],
		[122296, 2582],
		[124517, 6117],
		[127031, 6077],
		[128196, 8149],
		[129977, 5270],
		[132387, 3386],
		[133016, 2942],
		[134284, 2778],
		[135544, 8726],
		[136768, 5169],
		[138264, 2142],
		[138422, 563],
		[142219, 7900],
		[145530, 360],
		[148837, 7557],
		[149313, 2877],
		[152405, 900],
		[154309, 1791],
		[154583, 5343],
		[155301, 915],
		[155853, 2520],
		[158276, 5229],
		[166400, 7467],
		[167025, 4284],
		[167485, 4300],
		[168918, 6463],
		[168986, 1576],
		[169077, 4322],
		[170576, 4777],
		[171107, 7222],
		[171919, 295],
		[172671, 4398],
		[175814, 1187],
		[182638, 3710],
		[184097, 6355],
		[186899, 5366],
		[188715, 1438],
		[190138, 8272],
		[193526, 5123],
		[193964, 6776],
		[200280, 7978],
		[200330, 3072],
		[202275, 8871],
		[209415, 5075],
		[211642, 6452],
		[211699, 3831],
		[213547, 4841],
		[216053, 8391],
		[218104, 6902],
		[219016, 8350],
		[221752, 1305],
		[221834, 5555],
		[222130, 7966],
		[222406, 8742],
		[225404, 2061],
		[228216, 8029],
		[229431, 4843],
		[230351, 6055],
		[230390, 7844],
		[230459, 72],
		[230796, 4158],
		[231920, 2630],
		[232691, 7589],
		[233292, 3849],
		[234644, 7373],
		[234916, 2006],
		[238503, 3179],
		[241818, 4230],
		[245492, 5111],
		[247179, 3642],
		[249057, 7341],
		[249580, 1254],
		[251427, 666],
		[253122, 1733],
		[255171, 166],
		[255804, 8317],
		[257571, 7571],
		[262890, 546],
		[263454, 1870],
		[263626, 3123],
		[264818, 1476],
		[266027, 337],
		[266433, 6549],
		[266642, 2789],
		[268854, 5611],
		[269366, 2019],
		[272692, 7910],
		[278531, 5495],
		[280015, 5195],
		[280533, 174],
		[284755, 3069],
		[289318, 8337],
		[292925, 7693],
		[296749, 6082],
		[298042, 8378],
		[301573, 3915],
		[305883, 8801],
		[308008, 8119],
		[314995, 7773],
		[316137, 4729],
		[317040, 6117],
		[317431, 7875],
		[318267, 4518],
		[322884, 8570],
		[324138, 6846],
		[324902, 1543],
		[325560, 2333],
		[325892, 2922],
		[332517, 7036],
		[335321, 7455],
		[336487, 6564],
		[337171, 3087],
		[339181, 3398],
		[342672, 4434],
		[343872, 6649],
		[344720, 6892],
		[348698, 2156],
		[351724, 2400],
		[353971, 4590],
		[354445, 6265],
		[355515, 232],
		[357524, 2799],
		[358107, 6264],
		[360951, 8611],
		[366453, 112],
		[367082, 6524],
		[367191, 2132],
		[367198, 6122],
		[368688, 5051],
		[371249, 2721],
		[374272, 2358],
		[378103, 6846],
		[378789, 1393],
		[379721, 2546],
		[382751, 7134],
		[384550, 2985],
		[384689, 5031],
		[384783, 4532],
		[389363, 5957],
		[394358, 4226],
		[394566, 8813],
		[396760, 1111],
		[398411, 1034],
		[399809, 6595],
		[400166, 6922],
		[402226, 4453],
		[402329, 1342],
		[402969, 8592],
		[403737, 2187],
		[407124, 7952],
		[409814, 3920],
		[410592, 1546],
		[413976, 3861],
		[420527, 5472],
		[420900, 5424],
		[421115, 5371],
		[428669, 2413],
		[429929, 1225],
		[430926, 5756],
		[431330, 1965],
		[432684, 7178],
		[433800, 945],
		[437696, 8620],
		[438395, 5077],
		[438626, 7922],
		[439663, 3595],
		[439750, 8845],
		[441733, 1700],
		[445507, 7389],
		[447335, 1631],
		[450096, 3794],
		[453526, 989],
		[455435, 4777],
		[459470, 2627],
		[461015, 3300],
		[463127, 1475],
		[464179, 5292],
		[466792, 7424],
		[468971, 5911],
		[475209, 6589],
		[476101, 4590],
		[476765, 3181],
		[479283, 4895],
		[480852, 8064],
		[481524, 433],
		[483783, 1164],
		[484200, 4772],
		[485738, 5327],
		[486823, 1433],
		[487539, 2458],
		[487664, 117],
		[490032, 4527],
		[490039, 2811],
		[491097, 277],
		[491453, 515],
		[492695, 5827],
		[496190, 7240],
		[497738, 5705],
		[499056, 1781],
		[500944, 1021],
		[501340, 7278],
		[502672, 2842],
		[504101, 1340],
		[504157, 1809],
		[504318, 1223],
		[507720, 8507],
		[508703, 1633],
		[509545, 3755],
		[510945, 7959],
		[513478, 3848],
		[514691, 770],
		[527962, 4327],
		[530149, 5798],
		[531220, 5003],
		[532715, 8162],
		[536003, 3301],
		[538477, 8566],
		[540306, 5027],
		[541172, 5442],
		[542696, 2081],
		[549229, 2496],
		[551775, 1389],
		[551814, 8506],
		[551844, 6199],
		[555318, 7131],
		[560009, 6203],
		[563258, 6887],
		[563444, 4290],
		[566484, 2888],
		[568333, 3884],
		[568541, 6245],
		[569790, 889],
		[571009, 2333],
		[574182, 2475],
		[576204, 3624],
		[576964, 4666],
		[591294, 1341],
		[596171, 2780],
		[596273, 8249],
		[598540, 8363],
		[599966, 8238],
		[605612, 1573],
		[606080, 4289],
		[608053, 4410],
		[608233, 7422],
		[609469, 6486],
		[613814, 1838],
		[617920, 4191],
		[618107, 5021],
		[623546, 6576],
		[628135, 5136],
		[629010, 4913],
		[633473, 8421],
		[633679, 1903],
		[633961, 626],
		[636337, 3535],
		[636406, 2792],
		[636911, 5522],
		[637367, 6682],
		[638103, 5493],
		[638603, 5193],
		[638911, 2102],
		[644804, 5383],
		[650166, 903],
		[653343, 3923],
		[657588, 3337],
		[664257, 7357],
		[665856, 2194],
		[666576, 2422],
		[668432, 1681],
		[668713, 2641],
		[671478, 6555],
		[672658, 2912],
		[673915, 308],
		[676413, 1618],
		[680853, 7544],
		[683342, 4687],
		[690556, 7071],
		[693248, 8395],
		[693872, 8732],
		[694258, 8816],
		[695137, 4477],
		[695628, 1878],
		[697307, 3959],
		[697315, 52],
		[702952, 4725],
		[704077, 420],
		[712075, 405],
		[715419, 5961],
		[715523, 7042],
		[717267, 5927],
		[718743, 6795],
		[722904, 3318],
		[723002, 154],
		[725300, 3245],
		[725556, 8288],
		[726462, 7995],
		[730670, 3964],
		[731754, 515],
		[735223, 4491],
		[735574, 2466],
		[737911, 4030],
		[738717, 442],
		[740138, 7135],
		[742712, 6582],
		[743680, 6533],
		[745858, 4910],
		[746403, 3282],
		[750218, 2903],
		[751323, 675],
		[756449, 4257],
		[757229, 589],
		[759846, 459],
		[764509, 6438],
		[765303, 4885],
		[766724, 2920],
		[767197, 3806],
		[767456, 2087],
		[768276, 348],
		[771507, 3925],
		[772743, 8143],
		[775591, 3977],
		[775822, 3790],
		[778497, 1145],
		[780478, 1321],
		[782917, 8671],
		[786788, 3203],
		[787224, 7308],
		[788554, 4594],
		[791963, 3717],
		[795541, 6823],
		[795598, 1871],
		[797023, 3452],
		[800698, 3241],
		[802616, 7265],
		[806962, 1738],
		[808826, 1118],
		[811267, 6340],
		[813156, 3606],
		[813259, 8388],
		[814661, 4433],
		[815895, 8561],
		[820004, 2408],
		[820733, 6206],
		[822990, 4968],
		[823605, 3174],
		[824693, 6749],
		[826082, 5381],
		[826777, 6581],
		[827059, 6261],
		[827129, 659],
		[829517, 6762],
		[837221, 967],
		[840394, 2369],
		[840525, 6926],
		[842584, 3848],
		[844398, 840],
		[845932, 7189],
		[847144, 5142],
		[850228, 4271],
		[851755, 5971],
		[855662, 3616],
		[856273, 3417],
		[857307, 6786],
		[860692, 2571],
		[863226, 1196],
		[875408, 7378],
		[882762, 7452],
		[882962, 7978],
		[885088, 6504],
		[888540, 3474],
		[889295, 8545],
		[890297, 6758],
		[890584, 4491],
		[890653, 2425],
		[893937, 5245],
		[894612, 1679],
		[895745, 7065],
		[899924, 4441],
		[899978, 8799],
		[900561, 7566],
		[900792, 3021],
		[901599, 3158],
		[902515, 1214],
		[902769, 8579],
		[903386, 276],
		[903443, 6845],
		[905387, 5216],
		[908392, 2162],
		[911485, 7197],
		[912345, 2014],
		[916856, 1042],
		[917657, 4150],
		[920276, 7214],
		[921794, 2494],
		[926903, 8127],
		[927880, 8503],
		[928720, 1715],
		[930144, 2707],
		[931662, 384],
		[931844, 2566],
		[933018, 1657],
		[938560, 152],
		[941288, 6093],
		[941766, 7822],
		[941893, 422],
		[944970, 237],
		[945828, 7277],
		[946067, 3473],
		[948808, 2410],
		[949794, 6162],
		[951465, 5964],
		[952599, 2841],
		[956908, 8568],
		[959642, 350],
		[960868, 7787],
		[966769, 2347],
		[968510, 8052],
		[970163, 2300],
		[970175, 7340],
		[976747, 4337],
		[979283, 4500],
		[980116, 8004],
		[980763, 2788],
		[981876, 6537],
		[981902, 5484],
		[985188, 4902],
		[988304, 6309],
		[988521, 3454],
		[988657, 6597],
		[989020, 677],
		[992869, 6504],
		[992935, 4115],
		[996353, 6850],
	])
);

console.log(minRefuelStops(100, 50, [[50, 50]]));
console.log(
	minRefuelStops(1000, 36, [
		[7, 13],
		[10, 11],
		[12, 31],
		[22, 14],
		[32, 26],
		[38, 16],
		[50, 8],
		[54, 13],
		[75, 4],
		[85, 2],
		[88, 35],
		[90, 9],
		[96, 35],
		[103, 16],
		[115, 33],
		[121, 6],
		[123, 1],
		[138, 2],
		[139, 34],
		[145, 30],
		[149, 14],
		[160, 21],
		[167, 14],
		[188, 7],
		[196, 27],
		[248, 4],
		[256, 35],
		[262, 16],
		[264, 12],
		[283, 23],
		[297, 15],
		[307, 25],
		[311, 35],
		[316, 6],
		[345, 30],
		[348, 2],
		[354, 21],
		[360, 10],
		[362, 28],
		[363, 29],
		[367, 7],
		[370, 13],
		[402, 6],
		[410, 32],
		[447, 20],
		[453, 13],
		[454, 27],
		[468, 1],
		[470, 8],
		[471, 11],
		[474, 34],
		[486, 13],
		[490, 16],
		[495, 10],
		[527, 9],
		[533, 14],
		[553, 36],
		[554, 23],
		[605, 5],
		[630, 17],
		[635, 30],
		[640, 31],
		[646, 9],
		[647, 12],
		[659, 5],
		[664, 34],
		[667, 35],
		[676, 6],
		[690, 19],
		[709, 10],
		[721, 28],
		[734, 2],
		[742, 6],
		[772, 22],
		[777, 32],
		[778, 36],
		[794, 7],
		[812, 24],
		[813, 33],
		[815, 14],
		[816, 21],
		[824, 17],
		[826, 3],
		[838, 14],
		[840, 8],
		[853, 29],
		[863, 18],
		[867, 1],
		[881, 27],
		[886, 27],
		[894, 26],
		[917, 3],
		[953, 6],
		[956, 3],
		[957, 28],
		[962, 33],
		[967, 35],
		[972, 34],
		[984, 8],
		[987, 12],
	])
);
