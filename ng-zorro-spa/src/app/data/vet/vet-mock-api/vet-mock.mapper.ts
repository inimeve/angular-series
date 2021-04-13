import { VetModel } from 'src/app/core/vet/vet.model';
import { VetMockEntity } from './vet-mock.entity';

export class VetMockMapper {

    mapFrom(vetMockEntity: VetMockEntity): VetModel {
        return {
            id: vetMockEntity.id,
            name: vetMockEntity.name,
            age: vetMockEntity.age,
            address: vetMockEntity.address,
            phone: vetMockEntity.phone,
            skillLevel: vetMockEntity.skillLevel,
            experiencePoints: vetMockEntity.experiencePoints,
            specialization: vetMockEntity.specialization,
            city: vetMockEntity.city,
            joinDate: vetMockEntity.joinDate? new Date(vetMockEntity.joinDate): undefined
        };
    }

    mapTo(vetModel: VetModel): VetMockEntity {
        return {
            id: vetModel.id,
            name: vetModel.name,
            age: vetModel.age,
            address: vetModel.address,
            phone: vetModel.phone,
            skillLevel: vetModel.skillLevel,
            experiencePoints: vetModel.experiencePoints,
            specialization: vetModel.specialization,
            city: vetModel.city,
            joinDate: vetModel.joinDate?.getTime()
        };
    }

}
