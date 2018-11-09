<?php
namespace Shegurz\Controller;
use Think\Controller;
// define("TOKEN", "shegurzwx");
class ZtController extends Controller {
    public function sevendaysplan(){
      $this->display();
    }

    public function luckyturntable(){
      $this->display();
    }

    public function travelsday(){
      $this->display();
    }

    public function lottery() {
      $condition['um'] = I('um');
      if($condition['um']){
        $result = M('um')->where($condition)->find();
        if($result&&$result['prize']){
          jsonReturn(1,error,'您已抽奖');
        }
        $prize_arr = M('lottery')->select();
        // var_dump($prize_arr);
        if(empty($prize_arr)){
          jsonReturn(1,error,'奖池已空');

        }else{
          foreach ($prize_arr as $key => $val) {
            $arr[$val['id']] = $val['v'];
          }
          // shuffle($prize_arr); //打乱数组顺序
          // var_dump($arr);
          $rid = $this->get_rand($arr); //根据概率获取奖项id
          // var_dump($rid);
          $data = M('lottery')->where('id='.$rid)->find();
          $lottery = $data['prize'];
          $result1 = M('um')->where(array('um'=>$condition['um']))->save(array('prize'=>$lottery));
          // var_dump($result1);
          // $res['yesid'] = $prize_arr[$rid-1]['id']; //中奖项
          // var_dump($res['yesid']);
          $result2 = M('lottery')->where('id='.$rid)->delete();
          if($result1&&$result2){
            jsonReturn(0,success,$lottery);
          }else{
            jsonReturn(1,error,'操作失败');
          }

        }

      }else{
        jsonReturn(1,error,'请先输入um号');
      }

    }

    // public function delLottery($rid) {
    //   return $result;
    // }
    //

    public function verifyum() {
      $condition['um'] = I('um');

      $result = M('um')->where($condition)->find();
      // var_dump($result);
      if($result){
          if($result->prize){
            jsonReturn(1,error,'每人抽奖1次');
          }else{
            jsonReturn(0,success, $result);
          }
          // if($result)
      }else{
          jsonReturn(1,error,'请输入正确的um号');
      }

    }
    public function get_rand($proArr) {
        $result = '';
        //概率数组的总概率精度
        $proSum = array_sum($proArr);
        // var_dump($proArr);
        //概率数组循环
        foreach ($proArr as $key => $proCur) {
            $randNum = mt_rand(1, $proSum);
            if ($randNum <= $proCur) {
                $result = $key;
                break;
            } else {
                $proSum -= $proCur;
            }
        }
        unset ($proArr);
        return $result;
    }

}
