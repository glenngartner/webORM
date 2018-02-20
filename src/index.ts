import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import {Car} from "./entity/Car";

createConnection().then(async connection => {

    // the users
    let userRepository = connection.getRepository(User);

    console.log("=========================================");
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await userRepository.save(user);
    console.log("Saved a new user with id: " + user.id);
    console.log("-----------------------------------------");
    
    console.log("Loading users from the database...");
    const users = await userRepository.find();
    console.log("Loaded users: ", users);
    console.log("-----------------------------------------");

    console.log("Removing user 1 from the database...");
    const userToRemove = await userRepository.findOne();
    await userRepository.remove(userToRemove);
    console.log("Removed: ", userToRemove);

    console.log("=========================================");

    console.log("*****************************************");

    // the cars
    let carRepository = connection.getRepository(Car);

    console.log("=========================================");
    console.log("Inserting a new car into the database...");
    const car = new Car();
    car.make = "Honda";
    car.model = "Pilot";
    car.year = 2006;
    car.miles = 120000;
    await carRepository.save(car);
    console.log("Saved a new car with id: " + car.id);
    console.log("-----------------------------------------");

    console.log("Loading users from the database...");
    const cars = await carRepository.find();
    console.log("Loaded users: ", cars);
    console.log("-----------------------------------------");

    console.log("Removing car 1 from the database...");
    const carToRemove = await carRepository.findOne();
    await carRepository.remove(carToRemove);
    console.log("Removed: ", carToRemove);
    console.log("=========================================");

}).catch(error => console.log(error));
