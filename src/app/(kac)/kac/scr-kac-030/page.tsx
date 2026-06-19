export default function ScrKac030() {
  return (
    <div className="space-y-3">
      <h2 className="text-[14px] font-bold text-[#1e3a5f]">임대계약 자산번호관리</h2>

      <div className="rounded border border-[#c8d8e8] bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr>
                {["자산분류", "자산클래스명", "사업영역", "자산번호", "자산내역", "수량", "단위", "수익허가시작일", "수익허가종료일"].map((h) => (
                  <th key={h} className="bg-[#eef3f9] text-[#1e3a5f] font-semibold text-[12px] border border-[#c8d8e8] px-2 py-1.5 whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">1130</td>
                <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">건물(관리)</td>
                <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">BA15</td>
                <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">11000486</td>
                <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">식당A(패로더스대)</td>
                <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">3,559,790</td>
                <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">M2</td>
                <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">2016.01.01</td>
                <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">2016.12.31</td>
              </tr>
              <tr>
                <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">1120</td>
                <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">건물(관리)</td>
                <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">BA15</td>
                <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">11000498</td>
                <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">지상주차물로덤수시설</td>
                <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">17,502,420</td>
                <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">M2</td>
                <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center"></td>
                <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">2011.12.31</td>
              </tr>
              <tr>
                <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">1120</td>
                <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">건물(관리)</td>
                <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">BA15</td>
                <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">11000499</td>
                <td className="text-[12px] border border-[#d8e4ee] px-2 py-1">소방통합대기보고</td>
                <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-right">1,255,280</td>
                <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">M2</td>
                <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">2016.01.01</td>
                <td className="text-[12px] border border-[#d8e4ee] px-2 py-1 text-center">2016.01.01</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
