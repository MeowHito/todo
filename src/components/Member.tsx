export default function Member({ group }: { group?: string }) {
    type Member = {
      nameTH: string; // ชื่อภาษาไทย
      nameEN: string; // ชื่อภาษาอังกฤษ
      heightCm?: number; // ส่วนสูง (เซนติเมตร)
      age?: number; // อายุ (ปี)
      imgUrl: string; // รูปภาพ
      group: string; // กลุ่ม
    };
  
    const ListMember: Member[] = [
      {
        nameTH: "อลัน พศวีร์ ศรีอรุโณทัย",
        nameEN: "Alan",
        heightCm: 185,
        age: 23,
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvAmbafM-19Hz7sU2oKCqEw_oIdBHmS9zH2g&s",
        group: "BUS",
      },
      {
        nameTH: "มาร์ค กฤษณ์ กัญจนาทิพย์",
        nameEN: "Marckris",
        heightCm: 172,
        age: 22,
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9OdgInCMCkmpYY_H-wiBwUH70P_HI8Um-zQ&s",
        group: "BUS",
      },
      {
        nameTH: "ขุนพล ปองพล ปัญญามิตร",
        nameEN: "Khunpol",
        heightCm: 179,
        age: 22,
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShv3iEOj_5TnXLLRDhiNBBFl986J0B82WPPQ&s",
        group: "BUS",
      },
      {
        nameTH: "ฮาร์ท ชุติวัฒน์ จันเคน",
        nameEN: "Heart",
        heightCm: 174,
        age: 22,
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQyyGUFzuYzYLvjtk3dXQv40xfssbGR8VD0g&s",
        group: "BUS",
      },
      {
        nameTH: "จินวุค คิม",
        nameEN: "Jinwook",
        heightCm: 178,
        age: 21,
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUFo8SLrKt-wvX4yyUAmPuf521gXHr1l0OQ&s",
        group: "BUS",
      },
      {
        nameTH: "ไทย ชญานนท์ ภาคฐิน",
        nameEN: "Thai",
        heightCm: 178,
        age: 20,
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsCqxzuUL827XLZ7QiG6bmCjA_LVyY1eyV4A&s",
        group: "BUS",
      },
      {
        nameTH: "เน็กซ์ ณัฐกิตติ์ แช่มดารา",
        nameEN: "Nex",
        heightCm: 180,
        age: 20,
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnpLxRB3S9ERBqDGgGEXXnnNauGROXez394A&s",
        group: "BUS",
      },
      {
        nameTH: "ภู ธัชชัย ลิ้มปัญญากุล",
        nameEN: "Phu",
        heightCm: 180,
        age: 20,
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0udqmlxeuJ84jsjcXn3cnBmlqEd4TuPPaGQ&s",
        group: "BUS",
      },
      {
        nameTH: "คอปเปอร์ เดชาวัต พรเดชาพิพัฒ",
        nameEN: "Copper",
        heightCm: 173,
        age: 19,
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWOUb-5ufX35qv_eOMgHL23eU6hSCGWO4qUw&s",
        group: "BUS",
      },
      {
        nameTH: "เอเอ อชิรกรณ์ สุวิทยะเสถียร",
        nameEN: "AA",
        heightCm: 178,
        age: 19,
        imgUrl:
          "https://mintmagth.s3.ap-southeast-1.amazonaws.com/photos/shares/Mint%20People/2023/AUG%202023/789%20Debut%20final%20Ep/64d61aa031951.JPG",
        group: "BUS",
      },
      {
        nameTH: "จั๋ง ธีร์ บุญเสริมสุวงศ์",
        nameEN: "Jungt",
        heightCm: 173,
        age: 19,
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP54qeRSZd1SpkTHPT25_W71G0VkLASvnoSg&s",
        group: "BUS",
      },
      {
        nameTH: "ภีม วสุพล พรพนานุรักษ์",
        nameEN: "Peem",
        heightCm: 187,
        age: 19,
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa5nHsmVYrWGY0AwruZ4sLURRTA-cD_s8FXQ&s",
        group: "BUS",
      },
      {
        nameTH: "จินู",
        nameEN: "Jinu",
        heightCm: undefined,
        age: undefined,
        imgUrl:
          "https://akamai.sscdn.co/letras/385x349/fotos/4/3/8/9/43893fa438d5aa871004249209c233e0.jpg",
        group: "Saja Boys",
      },
      {
        nameTH: "แอ็บบี้",
        nameEN: "Abby",
        heightCm: undefined,
        age: undefined,
        imgUrl:
          "https://preview.redd.it/guys-is-it-bad-i-just-realised-that-abbys-name-is-abby-v0-wjt90pcpcacf1.jpeg?width=640&crop=smart&auto=webp&s=ef165815204034c6be61a77300d45aad3a76c471",
        group: "Saja Boys",
      },
      {
        nameTH: "มิสทรี",
        nameEN: "Mystery",
        heightCm: undefined,
        age: undefined,
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU3lplEEyMpnwJqlhQUSvgkjTCRxBGMn0TSw&s",
        group: "Saja Boys",
      },
      {
        nameTH: "โรแมนซ์",
        nameEN: "Romance",
        heightCm: undefined,
        age: undefined,
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCllCnZlCn0y60Ko3SCGeonm1jyE81KeN17A&s",
        group: "Saja Boys",
      },
      {
        nameTH: "เบบี้",
        nameEN: "Baby",
        heightCm: undefined,
        age: undefined,
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdjuJ2rpmJCyvkhezuak8GvzwAmqfl44vTQg&s",
        group: "Saja Boys",
      },
    ];
  
    // Prop = ListMember(ทั้งหมด) , ชื่อวง
    // ให้ Component แสดงรายชื่อของวงนั้นๆ
    //   <ListMember = {ListMember} group = "BUS" />
    const FillterListMember = group
      ? ListMember.filter((m) => m.group === group)
      : ListMember;
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Member {group ?? "All"}</h1>
        <ol style={{ fontSize: 20 }}>
          {FillterListMember.map((m, index) => (
            <li
              key={index}
              style={m.group === "BUS" ? { color: "green" } : { color: "blue" }}
            >
              ({m.group}) {m.nameTH} ({m.nameEN})
              <br />
              <div className="d-flex justify-center">
                <img width={200} src={m.imgUrl} alt="" />
              </div>
              <hr />
            </li>
          ))}
        </ol>
      </>
    );
  }