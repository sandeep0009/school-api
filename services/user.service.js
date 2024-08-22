import { connection } from "../database/dbconnection.js";
import { distanceCalculation } from "../lib/calculateDistance.js";
import { zodVerification } from "../lib/zodSchemaValidation.js";

export class UserService{
    static async addSchoolService(body){
        const {name,address,latitude,longitude}=body
        if(!name || !address || !latitude || !longitude){
            throw new Error('please provide all the fields');
             
        }

        const validationFields=zodVerification.safeParse({name,address,latitude,longitude});

        if (!validationFields.success) {
            console.log("Validation error", validationResult.error);
            throw new Error('Invalid input data');
        }

        const query=`insert into school(name,address,latitude,longitude) values (?,?,?,?)`;
        const params=[name,address,latitude,longitude];

        try {

          const newSchool=  await new Promise((resolve,reject)=>{
                connection.query(query,params,(error,results)=>{
                    if (error) return reject(error);
                     resolve(results)
                })
            })

            return { success: true, newSchool};
            
        } catch (error) {
            console.log(error)
            
        }


        

    }

    static async listSchoolService(query){
        
        const {latitude,longitude}=query;
        console.log(query)
        if(!latitude || !longitude){
            throw new Error("please provide all the fields");
        }

        const query1=`select * from school`;

        const schools=await new Promise((resolve,reject)=>{
            connection.query(query1,(err,result)=>{
                if( err )return reject(err)
                    resolve(result)
            })
        })

        const sortedSchools=schools.map(school=>{
            const distance=distanceCalculation(latitude,longitude,school.latitude,school.longitude);
            return {...school,distance}
        }).sort((a, b) => a.distance - b.distance)

        return {success:true,data:sortedSchools}
    }
}