import { DataTypes, ModelAttributes } from "sequelize";
import bcrypt from 'bcryptjs';

export const UserSchema = (): ModelAttributes =>
{

    return {

        id: {

            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'

        },
        firstName: {

            type: DataTypes.STRING,
            allowNull: false,
            field: 'first_name'

        },
        lastName:{
            
            type:DataTypes.STRING,
            allowNull:false,
            field:'last_name'

        },
      
        password: {

            type: DataTypes.STRING,
            allowNull: false,
            field: 'password',
            set ( value: string )
            {

                let hashedPassword = bcrypt.hashSync( value, 10 );
                this.setDataValue( 'password', hashedPassword );
            }


        },
       
        token: {

            type: DataTypes.STRING,
            allowNull: true,
            field: 'token'

        },
        email: {
            
            type: DataTypes.STRING,
            allowNull: true,
            field: 'email'

        },
        createdAt: {
            
            type: DataTypes.DATE,
            allowNull: true,
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'updated_at'
        }
    }
}