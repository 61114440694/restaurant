import React from 'react'
import Navbars from '../component/Navbars'
import Menulist from '../component/Menulist'
import Footer from '../component/Footer'

export default function main() {

    const data = [
        {
            img: "https://dk8dmtco5sckz.cloudfront.net/wp-content/w3-webp/uploads/2021/09/fried-pork-cutlet-curry-with-rice-dark-surface-2-scaled.jpgw3.webp",
            id: 0,
            name: "ข้าวแกงกะหรี่ญี่ปุ่น",
            description: "อีกหนึ่งเมนู ข้าวหมูทอด สไตล์ เมนูอาหารญี่ปุ่น ที่อร่อยและเข้มข้นยิ่งขึ้น เมื่อได้แกงกะหรี่รสชาติเข้มข้นมาทานคู่กัน จะทำให้คุณได้เพลิดเพลิน กับทั้งรสชาติของแกงกะหรี่และหมูทอดในมื้อเดียว",
            material: [
                "หมูสันนอก 4 ชิ้น",
                "สะโพกไก่ 200 กรัม",
                "พริกแกงกะหรี่ญี่ปุ่น 120 กรัม",
                "ไข่ไก่ 2 ฟอง",
                "หอมใหญ่ 400 กรัม",
                "น้ำมันรำข้าว 3 ช้อนโต๊ะ",
                "ซอสมะเขือเทศ 2 ช้อนโต๊ะ",
                "น้ำสต็อคดาชิแบบเข้มข้น 4 ช้อนโต๊ะ",
                "น้ำสะอาด 3 ถ้วย",
                "แป้งสาลีอเนกประสงค์",
                "เกล็ดขนมปัง",
                "ข้าวสวยญี่ปุ่น",
                "ผักดอง"
            ],
            solution: [
                "หั่นหอมใหญ่และสะโพกไก่ ออกเป็นชิ้นเล็ก ๆ",
                "ตั้งกระทะ ใส่น้ำมันรำข้าวลงไป ตามด้วยหอมใหญ่และสะโพกไก่ ผัดให้เข้ากันจนกว่าหอมใหญ่จะนิ่มลง",
                "ใส้เนื้อวัวลงไป ผัดให้เนื้อวัวสุก พอสุกแล้ว ให้ใส่มิริน สาเก ซอสโชยุ คลุกเคล้าให้เข้ากัน",
                "จากนั้น เติมน้ำซุปดาชิลงไป (ใช้ผงปลาโอแห้ง ผสมกับน้ำเปล่า) ในกระทะ โรยน้ำตาลลงไปเล็กน้อย แล้วนำฝาอบมาปิด เคี่ยวให้เนื้อวัวสุกทั่วกัน",
                "ใส่ต้นหอมญี่ปุ่นลงไป เคี่ยวให้น้ำซอสงวดลง พองวดลงดีแล้ว ให้ตักเฉพาะเนื้อขึ้นมา โปะลงบนข้าว ตอกไข่ไก่ แยกเอาเฉพาะไข่แดง วางไว้ตรงกลาง โรยหน้าด้วยต้นหอมซอย งาขาวคั่ว แล้วราดด้วยน้ำซอสที่อยู่ในกระทะ เป็นอันเสร็จ"
            ]

        }, {
            img: "https://dk8dmtco5sckz.cloudfront.net/wp-content/w3-webp/uploads/2021/08/yakisoba-noodles-stir-fried-with-vegetable-asian-style-vegan-vegetarian-food-scaled.jpgw3.webp",
            id: 1,
            name: "ยากิโซบะ",
            description: "ยากิโซบะ สูตรนี้ ใช้วัตถุดิบแบบดั้งเดิมที่นิยมใช้กัน นั่นคือ เส้นยากิโซบะ เนื้อหมู กะหล่ำปลี แครอท ถั่วงอก ผัดคลุกเคล้าเข้าด้วยกัน ด้วยซอสแบบโฮมเมด ให้รสชาติแบบที่เราคุ้นเคย โดยสูตรนี้เป็น เมนูอาหารญี่ปุ่น แบบที่แม่บ้านชาวญี่ปุ่นทำกันเลยทีเดียว บอกต่อจากช่อง Just One Cookbook มาดูกันว่า ยากิโซบะแบบดั้งเดิมจากญี่ปุ่น มีวิธีการทำอย่างไร",
            sauce: [
                "น้ำตาล 2 ช้อนโต๊ะ",
                "ซีอิ๊วขาว 2 ช้อนโต๊ะ",
                "ซอสหอยนางรม 4 ช้อนโต๊ะ",
                "ซอสมะเขือเทศ 4 ช้อนโต๊ะ",
                "วูสเตอร์ซอส 4 ช้อนโต๊ะ",
            ],
            material: [
                "เส้นยากิโซบะ 1 แพคใหญ่",
                "หมูสามชั้นสไลด์ 120 กรัม",
                "กะหล่ำปลี 4 ใบใหญ่",
                "หอมใหญ่ ครึ่งลูก",
                "แครอท 1 หัว",
                "เห็ดชิตาเกะ 3 หัว",
                "ต้นหอม 2 ต้น",
                "สาหร่ายป่นอาโอโนริ (Aonori)",
                "ขิงดองเบนิโชกะ (Beni Shoga)",
            ],
            solution: [
                "เตรียมวัตถุดิบ โดยนำกะหล่ำปลี มาสับหยาบ ๆ ไม่ให้ชิ้นเล็ก หรือ ชิ้นใหญ่ เกินไป",
                "ซอยหอมใหญ่ แครอท เห็ด ต้นหอม เป็นชิ้นเล็ก ๆ",
                "นำเส้นยากิโซบะไปลวกน้ำสะอาด ให้เส้นอ่อนและนุ่มลง",
                "ใส่น้ำมันลงในกระทะ เอาเนื้อหมูสามชั้นสไลด์ลงไปผัด จนกว่าจะสุก",
                "นำหอมใหญ่และแครอทลงไปผัดก่อน เมื่อเริ่มอ่อนลง ค่อยนำต้นหอม กะหล่ำปลี เห็ด ลงไปผัดต่อ",
                "ปรุงรสด้วยพริกไทยเล็กน้อย",
                "นำเส้นยากิโซบะลงไปผัด",
                "เติมซอสยากิโซบะลงไป คลุกเคล้าให้เข้ากัน",
                "จัดจาน ตกแต่งหน้าตาด้วยสาหร่ายป่นอาโอโนริ ขิงดองเบนิโชกะ",
            ]
        }, {
            img: "https://dk8dmtco5sckz.cloudfront.net/wp-content/w3-webp/uploads/2022/03/1-34-800x447.jpgw3.webp",
            id: 2,
            name: "เกี๊ยวซ่า",
            description: "ถือว่าเป็น เมนูอาหารญี่ปุ่น ที่เหมาะกับเป็นของว่างมาก ๆ สำหรับ เกี๊ยวซ่า ด้วยรสสัมผัสจากแป้งเกี๊ยวที่กรุบกรอบและไส้หมู ผักต่าง ๆ ที่สอดไส้อยู่ด้านใน พอจิ้มกับซอสโชยุที่ให้รสเปรี้ยว ก็จะทำให้ได้ความกรอบนอกนุ่มใน พร้อมรสชาติเปรี้ยวจี๊ดที่ช่วยให้อร่อยมากขึ้น ซึ่งเมนู เกี๊ยวซ่า นั้นถือว่าเป็นเมนูเกี๊ยวทอดที่ฮิตมากในประเทศญี่ปุ่น ก่อนที่จะได้รับความนิยมอย่างมากในประเทศไทย โดยสูตรและส่วนผสมต่าง ๆ มาจาก Youtuber ช่อง daddy cooking",
            material: [
                "แผ่นเกี๊ยวซ่าสำเร็จรูป",
                "ผักกาดขาว 200 กรัม",
                "หมูบด 300 กรัม",
                "แป้งมัน 1 ช้อนโต๊ะ",
                "ต้นหอมซอย 1 ช้อนโต๊ะ",
                "ขิงสับละเอียด 1 ช้อนชา",
                "กระเทียมสับ 1 ช้อนโต๊ะ",
                "ซอสหอยนางรม 1 ช้อนโต๊ะ",
                "โซยุ 1 ช้อนโต๊ะ",
                "น้ำมันงา 1 ช้อนโต๊ะ",
                "น้ำตาลทราย 1 ช้อนโต๊ะ",
                "พริกไทย 1/2 ช้อนชา"
            ],
            solution: [
                "นำผักกาดขาวมาสับให้ละเอียด โรยเกลือลงไป คลุกให้เข้ากัน พักทิ้งไว้ 10 นาที จากนั้น นำมาใส่ผ้าขาวบาง บีบเอาน้ำจากกะหล่ำปลีออก",
                "ทำไส้เกี๊ยวซ่า โดยเตรียมชามผสมอาหาร ใส่หมูบด ซอสโชยุ ซอสหอยนางรม น้ำตาลทราย พริกไทยป่น น้ำมันงา คลุกให้เข้ากัน",
                "จากนั้น ใส่แป้งมันลงไป นวดให้เข้ากัน ตามด้วยขิงสับละเอียด กระเทียมสับ ผักกาดขาว ต้นหอมซอย คลุกเคล้าทุกอย่างเข้าด้วยกัน เป็นเนื้อเดียว",
                "ตักไส้มา 1 ช้อนโต๊ะ วางลงบนแผ่นแป้ง แล้วจับจีบประกบกัน วางลงในถาดที่คลุมด้วยผ้าขาวบาง ไม่ให้โดนลม",
                "เมื่อทำครบหมดแล้ว ให้นำไปทอด โดยควรใช้กระทะเทฟล่อน เพื่อไม่ให้แป้งติดกระทะ แต่ถ้าไม่มี ให้ทาน้ำมันรอบกระทะก่อน แล้วเริ่มทอด โดยการเทน้ำมัน ให้เทน้ำมันลงบนแผ่นแป้งเกี๊ยวซ่า เพื่อให้แป้งมีความกรอบ ใช้ไฟกลาง ทอดไปสักพักจนแป้งด้านล่างเริ่มกรอบ หรือส่งกลิ่นหอม ให้เติมน้ำเปล่า หรือน้ำสต็อกลงไปประมาณครึ่งแผ่นเกี๊ยว จากนั้น ปิดฝาอบทิ้งไว้ 10 นาที",
                "เมื่อไส้เกี๊ยวเริ่มสุกได้ที่ ให้นำฝาออก แล้วทอดต่อไป จนเมื่อน้ำในกระทะเริ่มแห้งดีแล้ว ให้นำกระดาษซับมันวางลงไป ตามด้วยจาน แล้วพลิกกระทะ จัดจานเสิร์ฟพร้อมซอสโชยุ ก็เป็นอันเสร็จเรียบร้อย"
            ]
        }
    ]

    return (
        <div style={{width:"100%"}}>
            <><Navbars/></>
            <div className='text-center pt-4 pb-3'>
                <h3 className='font-Mitrs '>
                    <u>วิธีทำอาหารญี่ปุ่นยอดฮิต</u>
                </h3>
            </div>
            <div style={{width:"100%", marginBottom:"2rem"}} className='text-center'>
                <Menulist DataList={data}/>
            </div>
            <div>
                <Footer/>
            </div>

        </div>
    )
}
