import { UserService } from "../services/user.service.js";

export class UserController{

    static async addSchoolController(req,res){
        const details=await UserService.addSchoolService(req.body);
        
        if (details.success) {
            return res.status(201).json({ message: "Created successfully", result: details.newSchool });
        }
        return res.status(400).json({ message: error.message });
    }

    static async listSchoolController(req,res){
        console.log(req.query)
      
            const details = await UserService.listSchoolService(req.query);

            if (details.success) {
                return res.status(200).json({ message: "Schools fetched successfully", result: details.data });
            }
       
    }
}

