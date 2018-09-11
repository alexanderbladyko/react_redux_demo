export const enterFloor = (floor, employee) => ({
  type: 'ENTER_FLOOR',
  floor,
  employee,
})

export const leaveFloor = (floor, employee) => ({
  type: 'LEAVE_FLOOR',
  floor,
  employee,
})

export const enterCanteen = (employee) => ({
  type: 'ENTER_CANTEEN',
  employee,
})

export const leaveCanteen = (employee) => ({
  type: 'LEAVE_CANTEEN',
  employee,
})

