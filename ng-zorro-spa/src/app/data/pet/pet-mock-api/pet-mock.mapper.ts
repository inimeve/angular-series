import { PetModel } from 'src/app/core/pet/pet.model';
import { PetMockEntity } from './pet-mock.entity';

export class PetMockMapper {

    mapFrom(petMockEntity: PetMockEntity): PetModel {
        return {
            name: petMockEntity.name,
            birthday: new Date(petMockEntity.birthday)
        };
    }

    mapTo(petModel: PetModel): PetMockEntity {
        return {
            id: 0,
            name: petModel.name,
            birthday: petModel.birthday.getTime()
        }
    }

}
