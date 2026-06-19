export default function ScrKac047() {
  const rows = [
    { num: "20", bizArea: "BA15", custCode: "5008", contractNo: "14", contractType: "한계약", year: "1년도", custType: "국가기관", custCode2: "500251", custName: "김포국제공항관", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evict: "", maxDate: "", minDate: "", seq: "12874", result: "운한은" },
    { num: "20", bizArea: "BA15", custCode: "5080", contractNo: "13", contractType: "한계약", year: "1년도", custType: "국가기관", custCode2: "500251", custName: "김포국제공항관", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evict: "", maxDate: "", minDate: "", seq: "12874", result: "운한은" },
    { num: "20", bizArea: "BA15", custCode: "5100", contractNo: "15", contractType: "한계약", year: "1차도", custType: "국가기관", custCode2: "S00330", custName: "국립수산과학원", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evict: "", maxDate: "", minDate: "", seq: "13081", result: "이정" },
    { num: "20", bizArea: "BA15", custCode: "5122", contractNo: "14", contractType: "한계약", year: "1년도", custType: "국가기관", custCode2: "500251", custName: "서울전파관리소", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evict: "", maxDate: "", minDate: "", seq: "12874", result: "운한은" },
    { num: "20", bizArea: "BA15", custCode: "5122", contractNo: "13", contractType: "한계약", year: "1년도", custType: "국가기관", custCode2: "500251", custName: "서울전파관리소", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evict: "", maxDate: "", minDate: "", seq: "12874", result: "운한은" },
    { num: "20", bizArea: "BA15", custCode: "5206", contractNo: "11", contractType: "한계약", year: "1년도", custType: "국가기관", custCode2: "505241", custName: "한국전파관리소(우)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evict: "", maxDate: "", minDate: "", seq: "13081", result: "이정" },
    { num: "20", bizArea: "BA15", custCode: "5311", contractNo: "15", contractType: "한계약", year: "1차도", custType: "국가기관", custCode2: "S00143", custName: "기상청(서울기상관측소)", rentType: "업무시설·사용", state: "기타", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evict: "", maxDate: "", minDate: "", seq: "13081", result: "이정" },
    { num: "20", bizArea: "BA15", custCode: "5320", contractNo: "2", contractType: "한계약", year: "2차도", custType: "항공공사", custCode2: "S10220", custName: "(주)대한항공", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "365", evict: "", maxDate: "1997.01.01", minDate: "", seq: "", result: "" },
    { num: "20", bizArea: "BA15", custCode: "5426", contractNo: "13", contractType: "한계약", year: "1년도", custType: "항공공사", custCode2: "S10070", custName: "(주)아시아나항공", rentType: "업무시설·사용", state: "수의", startDate: "1980.01.04", endDate: "2235.04.57", days: "100124", evict: "", maxDate: "", minDate: "", seq: "12874", result: "운한은" },
    { num: "20", bizArea: "BA15", custCode: "5200", contractNo: "13", contractType: "한계약", year: "1년도", custType: "항공공사", custCode2: "S10070", custName: "(주)아시아나항공", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evict: "", maxDate: "2022.01.01", minDate: "", seq: "12874", result: "운한은" },
    { num: "20", bizArea: "BA15", custCode: "5332", contractNo: "13", contractType: "한계약", year: "1년도", custType: "항공공사", custCode2: "S10070", custName: "(주)아시아나항공", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evict: "", maxDate: "", minDate: "", seq: "", result: "운한은" },
    { num: "20", bizArea: "BA15", custCode: "5660", contractNo: "13", contractType: "한계약", year: "1년도", custType: "항공공사", custCode2: "S10070", custName: "(주)아시아나항공", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2026.12.31", days: "365", evict: "", maxDate: "", minDate: "", seq: "13026", result: "한은" },
    { num: "20", bizArea: "BA15", custCode: "6384", contractNo: "12", contractType: "한계약", year: "1년도", custType: "기타업", custCode2: "S12290", custName: "블루에어(주)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2026.12.31", days: "365", evict: "", maxDate: "", minDate: "", seq: "12990", result: "신운은" },
    { num: "20", bizArea: "BA15", custCode: "6408", contractNo: "15", contractType: "한계약", year: "1차도", custType: "기타업", custCode2: "S12800", custName: "(주)글로벌에어서비스", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2026.12.31", days: "365", evict: "", maxDate: "2003.02.15", minDate: "", seq: "", result: "" },
    { num: "20", bizArea: "BA15", custCode: "6520", contractNo: "16", contractType: "한계약", year: "1차도", custType: "기타업", custCode2: "S01290", custName: "중앙항공(주)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evict: "", maxDate: "", minDate: "", seq: "", result: "" },
    { num: "20", bizArea: "BA15", custCode: "6629", contractNo: "16", contractType: "한계약", year: "1차도", custType: "기타업", custCode2: "S12210", custName: "한국공항(주)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evict: "", maxDate: "2006.03.20", minDate: "", seq: "", result: "" },
    { num: "20", bizArea: "BA15", custCode: "6606", contractNo: "14", contractType: "한계약", year: "1년도", custType: "기타업", custCode2: "S12030", custName: "한국공항(주)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evict: "", maxDate: "", minDate: "", seq: "", result: "" },
    { num: "20", bizArea: "BA15", custCode: "6729", contractNo: "14", contractType: "한계약", year: "1년도", custType: "기타업", custCode2: "S12120", custName: "한국공항(주)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "731", evict: "", maxDate: "", minDate: "", seq: "", result: "" },
    { num: "20", bizArea: "BA15", custCode: "8082", contractNo: "11", contractType: "한계약", year: "1년도", custType: "기타업", custCode2: "S13262", custName: "(주)공항철도운영", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evict: "", maxDate: "2022.01.01", minDate: "", seq: "12874", result: "운한은" },
    { num: "20", bizArea: "BA15", custCode: "8244", contractNo: "13", contractType: "한계약", year: "1년도", custType: "기타업", custCode2: "S13080", custName: "(주)세방", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evict: "", maxDate: "", minDate: "1999.11.15", seq: "12874", result: "운한은" },
    { num: "20", bizArea: "BA15", custCode: "20545", contractNo: "13", contractType: "한계약", year: "1년도", custType: "기타업", custCode2: "S22200", custName: "공항리무진(주)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evict: "", maxDate: "", minDate: "2003.05.23", seq: "", result: "" },
    { num: "20", bizArea: "BA15", custCode: "21105", contractNo: "11", contractType: "한계약", year: "1년도", custType: "기타업", custCode2: "S00590", custName: "국제공항통관물류(주)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evict: "", maxDate: "", minDate: "2018.01.01", seq: "", result: "" },
    { num: "20", bizArea: "BA15", custCode: "21721", contractNo: "11", contractType: "한계약", year: "1년도", custType: "기타업", custCode2: "S12721", custName: "싸이버스카이(주)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evict: "", maxDate: "", minDate: "2007.10.05", seq: "", result: "" },
    { num: "20", bizArea: "BA15", custCode: "71721", contractNo: "11", contractType: "한계약", year: "1년도", custType: "기타업", custCode2: "S12721", custName: "싸이버스카이(주)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "730", evict: "", maxDate: "", minDate: "2007.10.26", seq: "13081", result: "이정" },
    { num: "20", bizArea: "BA15", custCode: "71721", contractNo: "12", contractType: "한계약", year: "1년도", custType: "기타업", custCode2: "S12721", custName: "싸이버스카이(주)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "365", evict: "", maxDate: "", minDate: "2008.07.22", seq: "13081", result: "이정" },
    { num: "20", bizArea: "BA15", custCode: "71726", contractNo: "13", contractType: "한계약", year: "1년도", custType: "기타업", custCode2: "S37585", custName: "바리스대학(주)", rentType: "업무시설·사용", state: "수의", startDate: "2026.01.01", endDate: "2027.12.31", days: "365", evict: "", maxDate: "", minDate: "", seq: "13081", result: "이정" },
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-[14px] font-bold text-[#1e3a5f]">임대계약총괄표(계약번호 기준) 년월:2026.05</h2>

      <div className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr>
                {["번호", "사업영역", "고객코드", "계약번호", "계약차수", "계약유형", "년도구분", "업종", "고객코드", "고객명", "업무구분·사용, 임달구분·상용", "임대개시일", "임대종료일", "납도해지일", "대여시일", "최초대여시일", "균도해지일", "임대사항이", "결과연장"].map((h) => (
                  <th key={h} className="bg-[#eef3f9] text-[#1e3a5f] font-semibold text-[12px] border border-[#c8d8e8] px-2 py-1.5 whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f8fbff]"}>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.num}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.bizArea}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.custCode}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.contractNo}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center"></td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.contractType}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.year}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.custType}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.custCode2}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.custName}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">{r.rentType}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.startDate}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.endDate}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.evict}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.days}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.maxDate}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.minDate}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.seq}</td>
                  <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">{r.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
