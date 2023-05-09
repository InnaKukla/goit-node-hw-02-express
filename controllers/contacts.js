// const Joi = require("joi");

const Contact = require("../models/contact")

// const HttpError = require("../utils/HttpError");

// const addSchema = Joi.object({
//   name: Joi.string().min(2).max(40).required(),
//   email: Joi.string().required(),
//   phone: Joi.string().required().min(13),
// });

// const updateSchema = Joi.object().required().min(1);

const listContacts = async (req, res, next) => {
  try {
    const result = await Contact.find();
    console.log(result);
    // res.json(result);
  } catch (error) {
    next(error);
  }
};

// const getContactById = async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     const result = await contacts.getContactById(contactId);
//     if (!result) {
//       throw HttpError(404, "Not found");
//     }

//     res.status(200).json(result);
//   } catch (error) {
//     next(error);
//   }
// };

// const addContact = async (req, res, next) => {
//   try {
//     const { name, email, phone } = req.body;
//     const { error } = addSchema.validate({ name, email, phone });
//     if (error) {
//       throw HttpError(400, "Missing required name field");
//     }
//     const result = await contacts.addContact({ name, email, phone });
//     res.status(201).json(result);
//   } catch (error) {
//     next(error);
//   }
// };

// const removeContact = async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     const result = await contacts.removeContact(contactId);
//     if (!result) {
//       throw HttpError(404, "Not found");
//     }
//     res.status(200).json({
//       message: "Contact deleted",
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// const updateContact = async (req, res, next) => {
//   try {
//     const { error } = updateSchema.validate(req.body);
//     if (error) {
//       throw HttpError(400, "Missing fields");
//     }
//     const { contactId } = req.params;
//     const result = await contacts.updateContact(contactId, req.body);
//     if (!result) {
//       throw HttpError(404, "Not found");
//     }
//     res.status(200).json(result);
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = {
  listContacts,
  // getContactById,
  // addContact,
  // removeContact,
  // updateContact,
};
